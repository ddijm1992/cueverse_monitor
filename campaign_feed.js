fetch("CampaignPlans.json")
  .then(res => res.json())
  .then(data => {
    const box = document.createElement("div");
    box.style = "margin-top:2rem;padding:1rem;background:#f0fdf4;border:1px solid #34d399;color:#065f46;";
    box.innerHTML = `
      <h3 style="margin-bottom:0.5rem;">📣 Empire Campaign Tracker</h3>
      ${Object.entries(data).map(([brand, entries]) => `
        <div style="margin-top:1rem;">
          <strong>${brand}</strong>
          <ul>
            ${entries.map(c => {
              const status = c.status || "unknown";
              const schedule = c.schedule || "unscheduled";
              return `<li><strong>${c.campaign}</strong> — <em>${status}</em> (${schedule})<br><small>🎯 Goal: ${c.goal}</small></li>`;
            }).join("")}
          </ul>
        </div>
      `).join("")}
    `;
    document.body.appendChild(box);
  })
  .catch(err => {
    console.error("Failed to load campaign tracker:", err);
  });
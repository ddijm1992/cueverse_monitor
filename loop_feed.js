fetch("loop_status.json")
  .then(res => res.json())
  .then(data => {
    const block = document.createElement('div');
    block.style = "margin-top:1.5rem;padding:1rem;background:#eef;border:1px solid #99f;";
    block.innerHTML = `
      <h3>🧠 Cueverse AI Loop – Live Dashboard</h3>
      <p>Last Sync: <strong>${new Date(data.last_sync).toLocaleString()}</strong></p>
      <ul>
        ${Object.entries(data.agents).map(([k, v]) => `<li>${k}: <strong>${v}</strong></li>`).join('')}
      </ul>
      <p>${data.notes}</p>
    `;
    document.body.appendChild(block);
  })
  .catch(err => console.error("Loop status fetch failed:", err));
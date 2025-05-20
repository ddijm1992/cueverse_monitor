fetch("revenue_overlay.json")
  .then(res => res.json())
  .then(data => {
    const container = document.createElement("div");
    container.style = "margin-top:2rem;padding:1rem;background:#ecfdf5;border:1px solid #10b981;color:#065f46;";
    container.innerHTML = "<h3 style='margin-bottom:0.5rem;'>💰 Revenue Timeline Forecast</h3>";

    const table = document.createElement("table");
    table.style = "width:100%;border-collapse:collapse;";
    table.innerHTML = `
      <thead>
        <tr style='text-align:left;'>
          <th style='padding:0.5rem;border-bottom:1px solid #ccc;'>Brand</th>
          <th style='padding:0.5rem;border-bottom:1px solid #ccc;'>Monthly</th>
          <th style='padding:0.5rem;border-bottom:1px solid #ccc;'>Target</th>
          <th style='padding:0.5rem;border-bottom:1px solid #ccc;'>Progress</th>
        </tr>
      </thead>
      <tbody>
        ${data.streams.map(s => {
          const pct = Math.round((s.monthly / s.target) * 100);
          return `
            <tr>
              <td style='padding:0.5rem;'>${s.brand}</td>
              <td style='padding:0.5rem;'>$${s.monthly.toLocaleString()}</td>
              <td style='padding:0.5rem;'>$${s.target.toLocaleString()}</td>
              <td style='padding:0.5rem;'>${pct}%</td>
            </tr>
          `;
        }).join("")}
      </tbody>
    `;
    container.appendChild(table);
    document.body.appendChild(container);
  })
  .catch(err => {
    console.error("Revenue overlay failed:", err);
  });
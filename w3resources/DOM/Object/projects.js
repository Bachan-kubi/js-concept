const project = {
    name: "Community Tree Plantation",
    startDate: "2025-05-01",
    endDate: "2025-10-31",
    location: {
      country: "Bangladesh",
      upazilas: ["Durgapur", "Kalmakanda", "Modhyanagar"]
    },
    objectives: [
      "Increase green coverage",
      "Enhance climate resilience",
      "Engage community in sustainable practices"
    ],
    activities: [
      {
        title: "Training on Tree Plantation",
        date: "2025-05-10",
        participants: 80,
        description: "Training on plantation techniques and care."
      },
      {
        title: "Distribution of Saplings",
        date: "2025-06-01",
        saplings: 9600,
        trees: ["Neem", "Mango", "Tulsi", "Guava"]
      }
    ],
    stakeholders: {
      coordinator: "Bachan Kubi",
      partners: ["PCC", "Local Govt", "Community Leaders"],
      donors: ["GreenFuture Foundation"]
    },
    budget: {
      total: 500000,
      currency: "BDT",
      breakdown: {
        training: 100000,
        saplings: 250000,
        logistics: 150000
      }
    },
    status: "Ongoing"
  };
  
  console.log(project.budget);

  const container = document.getElementById("projectContainer");

    container.innerHTML = `
      <div class="section">
        <h2>${project.name}</h2>
        <p><strong>Status:</strong> ${project.status}</p>
        <p><strong>Duration:</strong> ${project.startDate} to ${project.endDate}</p>
      </div>

      <div class="section">
        <h3>📍 Location</h3>
        <p><strong>Country:</strong> ${project.location.country}</p>
        <p><strong>Upazilas:</strong> ${project.location.upazilas.join(", ")}</p>
      </div>

      <div class="section">
        <h3>🎯 Objectives</h3>
        <ul>
          ${project.objectives.map(obj => `<li>${obj}</li>`).join("")}
        </ul>
      </div>

      <div class="section">
        <h3>🛠️ Activities</h3>
        ${project.activities.map(act => `
          <div>
            <strong>${act.title}</strong> (${act.date})<br>
            ${act.description || ""} 
            ${act.participants ? `<br>Participants: ${act.participants}` : ""}
            ${act.saplings ? `<br>Saplings: ${act.saplings}` : ""}
            ${act.trees ? `<br>Trees: ${act.trees.join(", ")}` : ""}
          </div><br>
        `).join("")}
      </div>

      <div class="section">
        <h3>👥 Stakeholders</h3>
        <p><strong>Coordinator:</strong> ${project.stakeholders.coordinator}</p>
        <p><strong>Partners:</strong> ${project.stakeholders.partners.join(", ")}</p>
        <p><strong>Donors:</strong> ${project.stakeholders.donors.join(", ")}</p>
      </div>

      <div class="section">
        <h3>💰 Budget</h3>
        <p><strong>Total:</strong> ${project.budget.total} ${project.budget.currency}</p>
        <ul>
          ${Object.entries(project.budget.breakdown).map(
            ([key, value]) => `<li>${key}: ${value} ${project.budget.currency}</li>`
          ).join("")}
        </ul>
      </div>
    `;
  
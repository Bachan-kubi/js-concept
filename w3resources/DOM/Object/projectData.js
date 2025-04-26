export const project = {
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
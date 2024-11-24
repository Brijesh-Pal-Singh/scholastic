document.addEventListener("DOMContentLoaded", () => {
  // Event listener for the "Apply Filters" button
  document
    .getElementById("applyFilters")
    .addEventListener("click", applyFilters);

  // Sample school data to store in local storage
  const schools = [
    {
      name: "Green Valley High School",
      budget: 50000,
      infrastructure: "excellent",
      results: 85,
      rating: 4.5,
      location: "City Center",
      description:
        "A top-notch school with exceptional facilities and academic excellence.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
    {
      name: "Blue Ridge Academy",
      budget: 30000,
      infrastructure: "good",
      results: 78,
      rating: 4.0,
      location: "Suburb",
      description: "Focused on holistic development and strong moral values.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
    {
      name: "Sunrise Public School",
      budget: 40000,
      infrastructure: "very good",
      results: 82,
      rating: 4.3,
      location: "Downtown",
      description:
        "Known for its innovative teaching methods and strong academic results.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
    {
      name: "Oakridge International School",
      budget: 80000,
      infrastructure: "excellent",
      results: 92,
      rating: 4.8,
      location: "Metro Area",
      description:
        "An international curriculum with world-class facilities and extracurricular options.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
    {
      name: "Bright Future Academy",
      budget: 25000,
      infrastructure: "good",
      results: 75,
      rating: 3.9,
      location: "Old Town",
      description:
        "Affordable education with a focus on discipline and character-building.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
    {
      name: "Harmony Residential School",
      budget: 60000,
      infrastructure: "very good",
      results: 88,
      rating: 4.6,
      location: "Uptown",
      description:
        "A residential school offering an immersive learning environment and personal development.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
    {
      name: "Cambridge Model School",
      budget: 90000,
      infrastructure: "excellent",
      results: 95,
      rating: 4.9,
      location: "Tech Park Area",
      description:
        "World-class faculty and facilities with Cambridge International Curriculum.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
    {
      name: "Starlight Kids School",
      budget: 20000,
      infrastructure: "average",
      results: 70,
      rating: 3.8,
      location: "Residential Area",
      description:
        "A kindergarten and primary school with a playful and engaging learning environment.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
    {
      name: "Zenith Academy",
      budget: 35000,
      infrastructure: "very good",
      results: 80,
      rating: 4.2,
      location: "Industrial Area",
      description:
        "An up-and-coming school focusing on STEM education and project-based learning.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPnud5u-v4RO5V9ys4OJSYUMq45O7dhJzjtOzCB=s1360-w1360-h1020",
    },
  ];

  if (!localStorage.getItem("schools")) {
    localStorage.setItem("schools", JSON.stringify(schools));
  }

  function renderSchools(filteredSchools) {
    const container = document.querySelector(".filter-container");

    // Remove existing results if any
    const existingResults = document.querySelector(".results-container");
    if (existingResults) {
      existingResults.remove();
    }

    // Create a new container for results
    const resultsContainer = document.createElement("div");
    resultsContainer.className = "results-container";
    resultsContainer.style.marginTop = "20px";

    if (filteredSchools.length === 0) {
      resultsContainer.innerHTML = "<p>No schools match the filters.</p>";
    } else {
      // Create cards for each school
      filteredSchools.forEach((school) => {
        const card = document.createElement("div");
        card.className = "comparison-card";
        card.style.border = "1px solid #ddd";
        card.style.borderRadius = "8px";
        card.style.padding = "15px";
        card.style.marginBottom = "15px";
        card.style.background = "#ffffff";
        card.style.display = "flex";
        card.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

        card.innerHTML = `
  <div class="school-image" style="flex: 1; margin-right: 20px; max-width: 200px;">
    <img
      src="${school.image}"
      alt="${school.name}"
      style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;"
    />
  </div>
  <div class="school-details" style="display: flex; flex-direction: column; gap: 10px; flex: 2;">
    <h3 class="school-name" style="margin: 0; color: #007bff;">${
      school.name
    }</h3>
    <p class="school-description" style="margin: 10px 0; color: #555;">
      ${school.description}
    </p>
    <div class="school-info" style="display: flex; flex-direction: column; gap: 5px;">
      <div class="info-item">Fees: ₹${school.budget}</div>
      <div class="info-item">Infrastructure: ${school.infrastructure}</div>
      <div class="info-item">Results: ${school.results}% Average</div>
      <div class="info-item">Location: ${school.location}</div>
      <div class="info-item">Rating: ${"★".repeat(
        Math.floor(school.rating)
      )}${"☆".repeat(5 - Math.floor(school.rating))} (${school.rating.toFixed(
          1
        )})</div>
    </div>
  </div>
`;

        resultsContainer.appendChild(card);
      });
    }

    container.appendChild(resultsContainer);
  }

  function applyFilters() {
    const budget = document.getElementById("budget").value;
    const infrastructure = document.getElementById("infrastructure").value;
    const results = document.getElementById("results").value;
    const rating = document.getElementById("rating").value;
    const location = document.getElementById("location").value.toLowerCase();

    const allSchools = JSON.parse(localStorage.getItem("schools"));

    const filteredSchools = allSchools.filter((school) => {
      return (
        (!budget || school.budget <= parseInt(budget)) &&
        (!infrastructure || school.infrastructure === infrastructure) &&
        (!results || school.results >= parseInt(results)) &&
        (!rating || school.rating >= parseFloat(rating)) &&
        (!location || school.location.toLowerCase().includes(location))
      );
    });

    renderSchools(filteredSchools);
  }
});

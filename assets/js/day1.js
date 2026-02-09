document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const clubFilter = document.getElementById("clubFilter");
  const events = document.querySelectorAll(".special-dish");
  const filtersSection = document.querySelector(".filters-section");

  function filterEvents() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedClub = clubFilter.value;

    events.forEach((event) => {
      const club = event.dataset.club || "";
      const title =
        event.querySelector(".section-title")?.textContent.toLowerCase() || "";
      const description =
        event.querySelector(".section-text")?.textContent.toLowerCase() || "";
      const isVisible =
        (title.includes(searchTerm) || description.includes(searchTerm)) &&
        (selectedClub === "" || club === selectedClub);

      event.classList.toggle("hidden-event", !isVisible);
    });
  }

  searchInput.addEventListener("input", filterEvents);
  clubFilter.addEventListener("change", filterEvents);

  // 📌 Scroll Hide Feature (Phones Only)
  let lastScrollY = window.scrollY;
  let windowHeight = window.innerHeight;

  function toggleFiltersOnScroll() {
    if (window.innerWidth <= 768) {
      // Apply only on phones (tablets & laptops excluded)
      let currentScrollY = window.scrollY;

      if (currentScrollY > windowHeight * 0.9) {
        // Hides at 3/4th of page
        filtersSection.style.transform = "translateY(-100%)";
        filtersSection.style.opacity = "0";
      } else {
        filtersSection.style.transform = "translateY(0)";
        filtersSection.style.opacity = "1";
      }

      lastScrollY = currentScrollY;
    } else {
      // Reset styles on larger screens
      filtersSection.style.transform = "translateY(0)";
      filtersSection.style.opacity = "1";
    }
  }

  window.addEventListener("scroll", toggleFiltersOnScroll);
  window.addEventListener("resize", toggleFiltersOnScroll); // Ensures it adapts to screen size changes
});

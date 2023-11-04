        // Function for progress bars (Resume page)
        function updateProgressBars() {
            const skillContainers = document.querySelectorAll('.skill-container');

            skillContainers.forEach((container) => {
                const skillValue = container.getAttribute('data-value');
                const progressBar = container.querySelector('.skill-percentage');
                progressBar.style.width = skillValue + '%';
            });
        }

        updateProgressBars();



// for filteration of portfolio projects
document.addEventListener("DOMContentLoaded", function () {
    // Get all filter links
    const filterLinks = document.querySelectorAll(".portfolio-filters a");
    const portfolioItems = document.querySelectorAll(".portfolio-grid figure");

    // Add a click event listener to each filter link
    filterLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Remove the "active" class from all filter items
            filterLinks.forEach(function (filterItem) {
                filterItem.parentElement.classList.remove("active");
            });

            // Add the "active" class to the clicked filter item (li)
            this.parentElement.classList.add("active");

            // Get the data-group attribute value of the clicked link
            const filterValue = this.getAttribute("data-group");

            // Loop through all portfolio items
            portfolioItems.forEach(function (item) {
                const dataGroups = item.getAttribute("data-groups");
                // Convert the data-groups attribute to an array
                const groupsArray = dataGroups.replace(/&quot;/g, '"');
                const groups = JSON.parse(groupsArray);

                // If the filterValue is "category_all" or the item belongs to the clicked filter, show it; otherwise, hide it.
                if (filterValue === "category_all" || groups.includes(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});


const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.navbar-right');

hamburgerMenu.addEventListener('click', function () {
  menu.classList.toggle('open');
  menu.classList.toggle('closed');
});

// preloader code 
function preoloaderFunc(){
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
} 

// map skeleton loading effect 
const mapContainer = document.querySelector('.map');
const map = document.querySelector('.mapIframe');
const gRecapttcha = document.querySelector('.g-recaptcha');
const recaptchaContainer = document.querySelector('.recaptchaContainer');
map.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus")

gRecapttcha.setAttribute('data-sitekey',"YOUR_SITE_KEY")
mapContainer.classList.remove('loading')
recaptchaContainer.classList.remove('loading')

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


// Work with API's
const URL = "http://localhost:8000/api";

//POST METHOD Using Fetch Api For Contact Form
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const formData = {
        name,
        email,
        message,
    };
    try {
        const response = await fetch(`${URL}/contact`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Specify JSON content type
                },
                body: JSON.stringify(formData)
            });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
});



/**
 * Define Global Variables
 * 
*/
// Add any global variables you need here

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Add any helper functions you need here

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// This function dynamically builds the navigation menu by creating list items with anchor tags for each section on the page
// build the nav
function buildNav() {
  const sections = document.querySelectorAll("section");
  const navList = document.getElementById("navbar__list");

  // Create a document fragment to improve performance
  const fragment = document.createDocumentFragment();

  sections.forEach((section) => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");

    // Set the text content of the anchor to the value of the 'data-nav' attribute of the section
    anchor.textContent = section.dataset.nav;
    // Set the href attribute of the anchor to '#sectionId' to create links to the corresponding sections based on their IDs
    anchor.href = `#${section.id}`;

    listItem.appendChild(anchor);
    fragment.appendChild(listItem);
  });

  // Append the document fragment to the navigation list
  navList.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport
// This function adds the 'active' class to the section that is currently in view while scrolling
// Add class 'active' to section when near top of viewport
// Helper function to add 'active' class to the active section
function setActiveSection() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Remove the 'active' class from all sections
      sections.forEach((sec) => sec.classList.remove("active"));
      // Add the 'active' class to the section in view
      section.classList.add("active");

      // Highlight the corresponding navigation link
      const navLinks = document.querySelectorAll(".menu__link");
      navLinks.forEach((navLink) => {
        if (navLink.getAttribute("href") === `#${section.id}`) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
    }
  });
}

// Add event listener for scrolling to call setActiveSection function
document.addEventListener("scroll", setActiveSection);



// Scroll to anchor ID using scrollTO event
// This function enables smooth scrolling to the appropriate section when clicking on a navigation link
// Scroll to section on link click
function scrollToSection(event) {
  event.preventDefault();
  if (event.target.nodeName === "A") {
    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);

    if (section) {
      // Scroll to the section with smooth behavior
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}
// Add an 'active' class to the navigation link that corresponds to the currently active section
// Add an 'active' class to the navigation link that corresponds to the currently active section
// Set sections as active and highlight corresponding navigation link
// Set sections as active and highlight corresponding navigation link
// Your existing JavaScript code

// Helper function to add 'active' class to the clicked link
function setActiveLink(link) {
  const navLinks = document.querySelectorAll(".menu__link");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
  link.classList.add("active");
}

// Scroll to section on link click
function scrollToSection(event) {
  event.preventDefault();
  if (event.target.nodeName === "A") {
    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);

    if (section) {
      // Scroll to the section with smooth behavior
      section.scrollIntoView({ behavior: "smooth" });

      // Highlight the clicked navigation link
      setActiveLink(event.target);
    }
  }
}

// Add event listener to the navigation links
document.getElementById("navbar__list").addEventListener("click", scrollToSection);


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// This event listener calls the 'build the nav' function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", buildNav);


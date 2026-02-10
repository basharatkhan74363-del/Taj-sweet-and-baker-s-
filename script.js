// script.js

// Function for smooth scrolling
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    window.scroll({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}

// Event listeners for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target ID from href
        smoothScroll(targetId); // Call the smooth scroll function
    });
});

// Interactive features can go here
// Example: Toggle visibility on click
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', function() {
    const content = document.getElementById('content');
    content.classList.toggle('hidden'); // Toggle visibility
});
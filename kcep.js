// Declare variables
const projectTitle = "KCEP Educational Computer";
const userManual = "User Manual for KCEP Educational Computer";

// DOM Elements
const navigation = document.querySelector('nav');
const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');

// Toggle mobile menu
menuButton.addEventListener('click', () => {
    try {
        menuList.classList.toggle('show');
    } catch (error) {
        console.error("An error occurred while toggling the menu:", error);
    }
});

// Close mobile menu when a menu item is clicked
menuList.addEventListener('click', () => {
    try {
        menuList.classList.remove('show');
    } catch (error) {
        console.error("An error occurred while closing the menu:", error);
    }
});

// Smooth scroll to sections
navigation.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        try {
            event.preventDefault();
            const targetId = event.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            console.error("An error occurred while scrolling to section:", error);
        }
    }
});

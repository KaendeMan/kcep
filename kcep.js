{\rtf1\ansi\deff0\nouicompat{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\*\generator Riched20 10.0.19041}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang9 // DOM Elements\par
const navigation = document.querySelector('nav');\par
const menuButton = document.querySelector('.menu-button');\par
const menuList = document.querySelector('.menu-list');\par
\par
// Toggle mobile menu\par
menuButton.addEventListener('click', () => \{\par
    menuList.classList.toggle('show');\par
\});\par
\par
// Close mobile menu when a menu item is clicked\par
menuList.addEventListener('click', () => \{\par
    menuList.classList.remove('show');\par
\});\par
\par
// Smooth scroll to sections\par
navigation.addEventListener('click', (event) => \{\par
    if (event.target.tagName === 'A') \{\par
        event.preventDefault();\par
        const targetId = event.target.getAttribute('href');\par
        const targetSection = document.querySelector(targetId);\par
        targetSection.scrollIntoView(\{ behavior: 'smooth' \});\par
    \}\par
\});\par
}
 
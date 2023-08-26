const navigation = document.querySelector('nav');
const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('show');
});

menuList.addEventListener('click', () => {
    menuList.classList.remove('show');
});

navigation.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});

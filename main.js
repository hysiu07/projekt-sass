const btnBurger = document.querySelector('.nav-btn');
const menuSide = document.querySelector('.menu-side');
const btnInsideMenu = document.querySelector('.menu-side-btn');

const showMenu = () => {
	menuSide.classList.add('active');
};
const hideMenu = () => {
	menuSide.classList.remove('active');
};

btnBurger.addEventListener('click', showMenu);
btnInsideMenu.addEventListener('click',hideMenu)
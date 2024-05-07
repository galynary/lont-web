// Select elements
const mobileMenu = document.querySelector('.menu__container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

// Function to open the menu
function openMenu() {
  mobileMenu.classList.remove('js-menu-container'); // Remove the class to display the menu
}

// Function to close the menu
function closeMenu() {
  mobileMenu.classList.add('js-menu-container'); // Add the class back to hide the menu
}

// Event listener for opening the menu when clicking openMenuBtn
openMenuBtn.addEventListener('click', openMenu);

// Event listener for closing the menu when clicking closeMenuBtn
closeMenuBtn.addEventListener('click', closeMenu);

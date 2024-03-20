(() => {
	const mobileMenu = document.querySelector(".js-menu-container");
	const openMenuBtn = document.querySelector(".js-open-menu");
	const closeMenuBtn = document.querySelector(".js-close-menu");

	openMenuBtn.addEventListener("click", toggleMenu);
	closeMenuBtn.addEventListener("click", () => {
		toggleMenu();
		window.scrollTo({
			top: 0
		});
	});

	function toggleMenu() {
		mobileMenu.classList.toggle("js-menu-container");
	}
})();

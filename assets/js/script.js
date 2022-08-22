window.addEventListener("DOMContentLoaded", () => {
const burgerBtn = document.querySelector(".burger__open");
const nav = document.querySelector(".nav");
const headerNav = document.querySelector(".header__nav");

const closeMenu = document.createElement("div")


burgerBtn.addEventListener("click", (event) => {
	const target = event.target;
	console.log("hello");

	if (!nav.classList.contains("trans")) {
			nav.classList.add("trans")
	} else {
			nav.classList.remove("trans")
	}

	headerNav.appendChild(closeMenu);
	closeMenu.classList.add("close-bg");
	closeMenu.style.cssText = `
		
	`;
	console.info(target)

});

window.addEventListener("click", (event) => {
	const target = event.target;
	console.info(target)

	if (target && target.classList.contains("close-bg")) {
			nav.classList.remove("trans")
			closeMenu.remove();
	}

});

const tab = document.querySelectorAll(".tab"),
	  tabsParent = document.querySelector(".tabs"),
	  tabContent = document.querySelectorAll(".tabs__block");

	function hideTabContent() {
		tabContent.forEach((item, i,) => {
			item.style.display = "none"
		});
		tab.forEach((item, i) => {
			item.classList.remove("active")
		});
	}
	function showTabContent(i) {
		tabContent[i].style.display = "";
		tab[i].classList.add("active");

	}

	hideTabContent();
	showTabContent(0);

	tabsParent.addEventListener("click", (event) => {
		const target = event.target;
		console.info(target)

		if (target && target.classList.contains("tab")) {
			// console.info(target)
			tab.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);	
				}
			});
		}


	});


});

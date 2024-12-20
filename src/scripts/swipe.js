document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
});
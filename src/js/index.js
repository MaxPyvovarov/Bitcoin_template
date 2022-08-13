window.$ = window.jQuery = require('jquery');
import 'jquery.marquee';
import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

window.addEventListener('DOMContentLoaded', () => {
	//Search
	const search = document.querySelector('.search'),
		searchBtn = document.querySelector('.search-button'),
		input = document.querySelector('.input'),
		menu = document.querySelector('.menu'),
		menuBtn = document.querySelector('.menu-icon'),
		closeMenuBtn = document.querySelector('.cancel-icon');

	searchBtn.addEventListener('click', () => {
		search.classList.toggle('active');
		input.focus();
	});

	//Mobile menu
	menuBtn.addEventListener('click', () => {
		menu.classList.add('active');
	});

	closeMenuBtn.addEventListener('click', () => {
		menu.classList.remove('active');
	});

	//Home swiper
	const home_swiper = new Swiper('.home__swiper', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: 'true',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//Testimonial swiper
	const testimonial_swiper = new Swiper('.testimonial__swiper', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		slidesPerView: 1,
		spaceBetween: 500,
		autoHeight: 'true',
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			autoheight: true,
		},
	});

	//Tabs
	// $('.tabs__button')
	// 	.on('click', function() {
	// 		$('.tabs .tabs__button')
	// 			.removeClass('active')
	// 			.eq($(this).index())
	// 			.addClass('active');
	// 		$('.tabs__item')
	// 			.hide()
	// 			.eq($(this).index())
	// 			.fadeIn();
	// 	})
	// 	.eq(0)
	// 	.addClass('active');
	// $('.tabs__item')
	// 	.eq(0)
	// 	.fadeIn();

	//Tabs
	function tabs(
		tabsButtonSelector,
		tabsItemSelector,
		tabsParentSelector,
		activeClass
	) {
		const tabs = document.querySelectorAll(tabsButtonSelector),
			tabsItem = document.querySelectorAll(tabsItemSelector),
			tabsParent = document.querySelector(tabsParentSelector);

		function hideTabContent() {
			tabsItem.forEach((tab) => {
				tab.classList.remove(activeClass, 'fade');
			});

			tabs.forEach((tab) => {
				tab.classList.remove(activeClass);
			});
		}

		function showTabContent(i = 0) {
			tabsItem[i].classList.add(activeClass, 'fade');
			tabs[i].classList.add(activeClass);
		}

		hideTabContent();
		showTabContent();

		tabsParent.addEventListener('click', (event) => {
			const target = event.target;

			if (target && target.classList.contains(tabsButtonSelector.slice(1))) {
				tabs.forEach((tab, i) => {
					if (tab === target && !target.classList.contains(activeClass)) {
						hideTabContent();
						showTabContent(i);
					}
				});
			}
		});
	}
	//tabButtonSelector, tabsItemSelector, tabsParentSelector, activeClass
	tabs('.tabs__button', '.tabs__item', '.tabs__buttons', 'active');

	//Video
	const videoWrapper = document.querySelector('.video__play'),
		video = document.querySelector('#video');

	async function playVideo() {
		try {
			await video.play();
			videoWrapper.classList.remove('paused');
		} catch (err) {
			videoWrapper.classList.add('paused');
		}
	}

	videoWrapper.addEventListener('click', () => {
		if (videoWrapper.classList.contains('paused')) {
			playVideo();
		} else {
			video.pause();
			videoWrapper.classList.add('paused');
		}
	});
});

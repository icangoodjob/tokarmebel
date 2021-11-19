// DROP-MENU
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropMenuBtn = document.querySelector('.dropdown__button');
	const dropMenuList = dropDownWrapper.querySelector('.dropdown__list');
	const dropMenuListItems = dropMenuList.querySelectorAll('.dropdown__list-item');
	const dropMenuInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropMenuBtn.addEventListener('click', function (e) {
		dropMenuList.classList.toggle('show');
		dropDownWrapper.classList.toggle('active');
		this.classList.toggle('active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropMenuListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropMenuBtn.innerHTML = this.innerHTML;
			dropMenuBtn.focus();
			dropMenuInput.value = this.dataset.value;
			dropMenuList.classList.remove('show');
			dropMenuBtn.classList.remove('active');
			dropDownWrapper.classList.remove('active');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropMenuBtn) {
			dropMenuBtn.classList.remove('active');
			dropMenuList.classList.remove('show');
			dropDownWrapper.classList.remove('active');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropMenuBtn.classList.remove('active');
			dropMenuList.classList.remove('show');
			dropDownWrapper.classList.remove('active');
		}
	});
});

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__menu');
const menuClose = document.querySelector('.menu__close');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.add('_active');
		menu.classList.toggle('_active');
	});
	menuClose.addEventListener('click', function(e){
		document.body.classList.remove('lock');
		iconMenu.classList.remove('_active');
		menu.classList.remove('_active');
	});
}

// MAIN-SLIDER
const mainSlider = document.querySelector('.main-slider');
mainSwiper = new Swiper(mainSlider, {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	effect: 'slide',
	speed: 800,
	loop: false,
	watchOverflow: true,
	slideClass: "main-block__item",
	wrapperClass: "main-slider__body",
		// Dotts
		pagination: {
			el: '.main-slider__pagination',
			clickable: true,
			type: "fraction",
		},
		// Arrows
		navigation: {
			nextEl: '.main-slider .slider-arrow_next',
			prevEl: '.main-slider .slider-arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 1,
				spaceBetween: 40,
			},
		}
	});

const articleSlider = document.querySelector('.article-slider');
articleSwiper = new Swiper(articleSlider, {
	observer: true,
	observeParents: true,
	observeChildren: true,
	autoHeight: true,
	effect: 'slide',
	speed: 800,
	loop: false,
	watchOverflow: true,
	slideClass: "article__column",
	wrapperClass: "article__wrapper",
		// Dotts
		pagination: {
			el: '.article-slider__pagination',
			clickable: true,
			type: "fraction",
		},
		// Arrows
		navigation: {
			nextEl: '.article__controls .slider-arrow_next',
			prevEl: '.article__controls .slider-arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
				pagination: {
					el: '.article-slider__pagination_mobile',
					clickable: true,
					type: "fraction",
				},
			},
			580: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});

const seoSlider = document.querySelector('.seo-block__slider');
seoSwiper = new Swiper(seoSlider, {
	observer: true,
	observeParents: true,
	observeChildren: true,
	slidesPerView: 1,
	initialSlide: 0,
	spaceBetween: 15,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	speed: 800,
	loop: false,
	watchOverflow: true,
	slideClass: 'seo-block__item',
	wrapperClass: 'seo-block__wrapper',
		// Dotts
		pagination: {
			el: '.seo-block__pagination',
			clickable: true,
			type: 'fraction',
		},
		// Arrows
		navigation: {
			nextEl: '.seo-block__slider .slider-arrow_next',
			prevEl: '.seo-block__slider .slider-arrow_prev',
		},
	});

const buildingSlider = document.querySelector('.building-slider');
buildingSwiper = new Swiper(buildingSlider, {
	observer: true,
	observeParents: true,
	observeChildren: true,
	slidesPerView: 1,
	initialSlide: 0,
	spaceBetween: 15,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	speed: 800,
	loop: false,
	watchOverflow: true,
	slideClass: 'building__photo',
	wrapperClass: 'building-slider__body',
		// Dotts
		pagination: {
			el: '.building-slider__pagination',
			clickable: true,
			type: 'fraction',
		},
		// Arrows
		navigation: {
			nextEl: '.building-slider .slider-arrow_next',
			prevEl: '.building-slider .slider-arrow_prev',
		},
	});


// SPOLLERS
"use strict"

const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}
//========================================================================================================================================================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

//========================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например:
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
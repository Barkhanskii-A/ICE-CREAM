const html = document.documentElement;
// logger (Full Logging System) =================================================================================================================
function FLS(message) {
	// @ts-ignore
	setTimeout(() => (window.FLS ? console.log(message) : null), 0);
}
/* Проверка мобильного браузера */
const isMobile = {
	Android: () => navigator.userAgent.match(/Android/i),
	BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
	iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
	Opera: () => navigator.userAgent.match(/Opera Mini/i),
	Windows: () => navigator.userAgent.match(/IEMobile/i),
	any: () => isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows(),
};
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) {
		html.classList.add('touch');
	}
}
// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
	window.addEventListener('load', () => {
		setTimeout(() => {
			html.classList.add('loaded');
		}, 0);
	});
}

// Модуль работы со слайдером =====================================================================================================================
const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-disabled',
		prevEl: '.swiper-button-disabled',
	},
});

export { FLS, isMobile, addTouchClass, addLoadedClass };

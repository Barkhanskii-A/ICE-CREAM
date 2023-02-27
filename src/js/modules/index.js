const html = document.documentElement;

// FLS (Full Logging System) =================================================================================================================
function FLS(message) {
	setTimeout(() => {
		if (window.FLS) {
			console.log(message);
		}
	}, 0);
}

// Модуль работы со слайдером =====================================================================================================================
const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-disabled',
		prevEl: '.swiper-button-disabled',
	},
});

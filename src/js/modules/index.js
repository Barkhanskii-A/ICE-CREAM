const html = document.documentElement;

// FLS (Full Logging System) =================================================================================================================
function FLS(message) {
	setTimeout(() => {
		if (window.FLS) {
			console.log(message);
		}
	}, 0);
}

// Модуль работы с меню (бургер) ==============================================================================================================

// Модуль работы со слайдером =====================================================================================================================
const btnDarkMode = document.querySelector('.dark-mode-btn')

//1. ++++++++++ Проверка темной темы в системных настройках ++++++++++
if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
}

//2. +++++++++ Проверка темной темы в localStorage +++++++++
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active')
	document.body.classList.remove('dark')
}

//3. +++++++++ Если меняются системные настройки, меняем тему +++++++++
window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', event => {
		const newColorScheme = event.matches ? 'dark' : 'light'

		if (newColorScheme === 'dark') {
			btnDarkMode.classList.add('dark-mode-btn--active')
			document.body.classList.add('dark')
			localStorage.setItem('darkMode', 'dark')
		} else {
			btnDarkMode.classList.remove('dark-mode-btn--active')
			document.body.classList.remove('dark')
		}
	})

//========= Включение ночного режима по кнопке =========

// btnDarkMode.addEventListener('click', () => {
// 	if (btnDarkMode.classList.contains('dark-mode-btn--active')) {
// 		btnDarkMode.classList.remove('dark-mode-btn--active')
// 	} else {
// 		btnDarkMode.classList.add('dark-mode-btn--active')
// 	}
// })

// Более изящный вариант
btnDarkMode.onclick = () => {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	const isDark = document.body.classList.toggle('dark')

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
}

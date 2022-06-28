function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	
	body.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		
		return;
	}

	button.innerHTML = darkMode;
	
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');

const body = document.getElementsByTagName('body')[0];


button.addEventListener('click', changeMode);



        function displayAbout() {
            var arrow = document.getElementById('animation');
            arrow.classList.toggle('rotate');
            var display = document.getElementById('about');
            display.classList.toggle('active');
        }
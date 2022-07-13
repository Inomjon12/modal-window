let popapBg = document.querySelector('.popap_bg');
let popap = document.querySelector('.popap');
let openPopapButtons = document.querySelectorAll('.open-popap');
let closePopapButton = document.querySelector('.close-popap');

openPopapButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popapBg.classList.add('active');
		popap.classList.add('active');
	})
});

closePopapButton.addEventListener('click', () => {
	popapBg.classList.remove('active');
	popap.classList.remove('active');
});

document.addEventListener('click',(e) => {
	if(e.target === popapBg) {
		popapBg.classList.remove('active');
		popap.classList.remove('active');
	}
})

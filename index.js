
const elements = document.getElementsByTagName('div');
let clap = new Audio('./sounds/clap.wav')
let hihat = new Audio('./sounds/hihat.wav')
let kick = new Audio('./sounds/kick.wav')
let openhat = new Audio('./sounds/openhat.wav')
let boom = new Audio('./sounds/boom.wav')
let ride = new Audio('./sounds/ride.wav')
let snare = new Audio('./sounds/snare.wav')
let tom = new Audio('./sounds/tom.wav')
let tink = new Audio('./sounds/tink.wav')

document.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'a':
			clap.play();
			elements[0].classList.add('playing');
			setTimeout(() => {
				elements[0].classList.remove('playing');
			}, 300)
			break;
		case 's':
			hihat.play();
			elements[1].classList.add('playing');
			setTimeout(() => {
				elements[1].classList.remove('playing');
			}, 300)
			break;
		case 'd':
			kick.play();
			elements[2].classList.add('playing');
			setTimeout(() => {
				elements[2].classList.remove('playing');
			}, 300)
			break;
		case 'f':
			openhat.play();
			elements[3].classList.add('playing');
			setTimeout(() => {
				elements[3].classList.remove('playing');
			}, 300)
			break;
		case 'g':
			boom.play();
			elements[4].classList.add('playing');
			setTimeout(() => {
				elements[4].classList.remove('playing');
			}, 300)
			break;
		case 'h':
			ride.play();
			elements[5].classList.add('playing');
			setTimeout(() => {
				elements[5].classList.remove('playing');
			}, 300)
			break;
		case 'j':
			snare.play();
			elements[6].classList.add('playing');
			setTimeout(() => {
				elements[6].classList.remove('playing');
			}, 300)
			break;
		case 'k':
			tom.play();
			elements[7].classList.add('playing');
			setTimeout(() => {
				elements[7].classList.remove('playing');
			}, 300)
			break;
		case 'l':
			tink.play();
			elements[8].classList.add('playing');
			setTimeout(() => {
				elements[8].classList.remove('playing');
			}, 300)
			break;
	}
})

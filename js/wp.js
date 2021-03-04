// WHATSAPP

const wp = document.querySelector('.wp')
const wpDialog = document.querySelector('.wp-dialog')
const wpSvg = document.querySelector('.wp-svg')
const wpSend = document.querySelector('.wp-send')

const wpDialogAnimation = gsap.to('.wp-dialog', {
	display: 'block',
	opacity: 1,
	y: -220,
	duration: 0.5,
	paused: true,
})

wp.addEventListener('click', (e) => {
	e.stopPropagation()
	wpDialogAnimation.play()
})

document.addEventListener('click', (e) => {
	if (e.target !== wpDialog && e.target !== wp && e.target !== wpSvg) {
		wpDialogAnimation.reverse()
	}
})

const text = document.querySelector('.wp-input')

text.addEventListener('keydown', (e) => {
	if (e.key == 'Escape') {
		wpDialogAnimation.reverse()
	}
	if (e.key == 'Enter') {
		toWhatsapp()
	}
})

wpSend.addEventListener('click', () => toWhatsapp())

const toWhatsapp = () => {
	window.open(
		'https://wa.me/5493816265457?text=' + encodeURIComponent(text.value)
	)
}

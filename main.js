//open and close menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
	element.addEventListener('click', function () {
		nav.classList.toggle('show')
	})
}

//hide menu when option selected
const links = document.querySelectorAll('nav ul li a')

for (link of links) {
	link.addEventListener('click', function () {
		nav.classList.remove('show')
	})
}

//change header shadow when scrolling
function addShadowOnHeader() {
	const header = document.querySelector('#header')
	const navHeight = header.offsetHeight

	if (window.scrollY >= navHeight) {
		header.classList.add('scroll')
	} else {
		header.classList.remove('scroll')
	}
}

//Swiper Carousel
const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination'
	},
	mousewheel: true,
	keyboard: true
})

//Trigger an alert on whatsapp button
const whatsapp = document.querySelector('.whatsapp')

whatsapp.addEventListener('click', function () {
	alert('Learning project: no number available')
})

//Scroll Reveal
const scrollReveal = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700,
	reset: true
})

scrollReveal.reveal(
	`#home .text, #home .image,
	#about .text, #about .image,
	#services header, #services .card,
	#testimonials header, #testimonials .testimonials,
	#contact .text, #contact .links,
	footer .brand, footer .social
	`,
	{ interval: 100 }
)

//Back to top button
function backToTop() {
	const backToTopButton = document.querySelector('.back-to-top')

	if (window.scrollY >= 560) {
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
}

//scrolling events
window.addEventListener('scroll', function () {
	addShadowOnHeader()
	backToTop()
})

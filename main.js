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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
	if (window.scrollY >= navHeight) {
		header.classList.add('scroll')
	} else {
		header.classList.remove('scroll')
	}
})

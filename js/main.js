// // Navbar Toggle
// burgerMenu = document.querySelector('.burger-menu')
// menuResponsive = document.querySelector('.menu-responsive')
// links = document.querySelectorAll('.link')

// const toggleNavbar = () => {
//   burgerMenu.classList.toggle('active')
//   menuResponsive.classList.toggle('active')
// }

// const removeNavbar = () => {
//   burgerMenu.classList.remove('active')
//   menuResponsive.classList.remove('active')
// }

// burgerMenu.addEventListener('click', toggleNavbar)
// links.forEach((link) => {
//   link.addEventListener('click', removeNavbar)
// })

// const navLogo = document.querySelector('.nav-logo')

// navLogo.addEventListener('click', removeNavbar)

// // // Toggle Nav Variant
// const nav = document.querySelector('nav')

// const navDark = () => {
//   nav.classList.add('nav-dark')
// }

// const navLight = () => {
//   nav.classList.remove('nav-dark')
// }

// // // Hero Trigger
// ScrollTrigger.create({
//   // markers: true,
//   trigger: '.hero',
//   start: 'top bottom',
//   endTrigger: '.hero',
//   end: 'bottom top',
//   onEnter: () => navLight(),
//   onLeave: () => navDark(),
//   onEnterBack: () => navLight(),
// })

// Navbar Toggle
burgerMenu = document.querySelector('.burger-menu')
menuResponsive = document.querySelector('.menu-responsive')
links = document.querySelectorAll('.link')

const toggleNavbar = () => {
  burgerMenu.classList.toggle('active')
  menuResponsive.classList.toggle('active')
}

const removeNavbar = () => {
  burgerMenu.classList.remove('active')
  menuResponsive.classList.remove('active')
}

burgerMenu.addEventListener('click', toggleNavbar)
links.forEach((link) => {
  link.addEventListener('click', removeNavbar)
})

const navLogo = document.querySelector('.nav-logo')

navLogo.addEventListener('click', removeNavbar)

// // Toggle Nav Variant
const nav = document.querySelector('.nav')

const navDark = () => {
  nav.classList.add('nav-dark')
}

const navLight = () => {
  nav.classList.remove('nav-dark')
}

// // Hero Trigger
ScrollTrigger.create({
  // markers: true,
  trigger: '.hero',
  start: 'top bottom',
  endTrigger: '.hero',
  end: 'bottom top',
  onEnter: () => navLight(),
  onLeave: () => navDark(),
  onEnterBack: () => navLight(),
})

// Footer Year
const year = document.querySelector('.year')

const date = new Date()
const currentYear = date.getFullYear()

year.innerHTML = currentYear

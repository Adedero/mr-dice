AOS.init({
  once: true,
  duration: 800
});

const header = document.querySelector('#main-header')

window.addEventListener('scroll', () => {
  if (!header) return
  if (window.scrollY > 100) {
    header.style.zIndex = 100
  } else {
    header.style.zIndex = 10
  }
})

const nav = document.querySelector('#nav')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav?.classList.toggle('active')
  })
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    nav?.classList.remove('active')
  })
}

const navLinks = document.querySelectorAll('[data-nav]')
if (navLinks) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('active')
    })
    const href = link.getAttribute('href')
    if (window.location.pathname === href) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}
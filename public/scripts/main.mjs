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
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const menuScroll = document.querySelector('.menu-scroll');
  menuToggle.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
      menuScroll.classList.toggle('mostrar');
    }
  });
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !menuScroll.contains(e.target)) {
      menuScroll.classList.remove('mostrar');
    }
  });
});

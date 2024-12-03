window.addEventListener('scroll', function() {
    var navegacionScroll = document.querySelector('.navegacion-scroll');
    if (window.scrollY > 500) { // ajusta el valor según la altura de tu cabecera
      navegacionScroll.style.display = 'block';
    } else {
      navegacionScroll.style.display = 'none';
    }
  });
const botonArriba = document.querySelector('.scroll-up');

botonArriba.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

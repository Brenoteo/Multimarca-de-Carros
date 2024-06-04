// Scroll suave ao clicar no Título
document.addEventListener("DOMContentLoaded", function() {
  var headerTitle = document.querySelector(".header-title");

  headerTitle.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Menu hamburguer ao clicar
function menuHamburguer() {
  const btnMenu = document.querySelector('#btn-menu');
  btnMenu.classList.toggle('active');
}

const divMenuMobileAnimation = document.querySelector('#btn-menu')
const divMenuMobile = document.querySelector('#menu-mobile')

divMenuMobile.addEventListener('click', menuHamburguer)

function menuHamburguer(){
  divMenuMobile.classList.toggle('open')
  divMenuMobileAnimation.classList.toggle('active')
}

// Efeito de cabeçalho oculto ao rolar a página
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        document.querySelector(".header").style.top = "-100px"; /* Ou a altura do seu cabeçalho */
    } else {
        document.querySelector(".header").style.top = "0";
    }
    lastScrollTop = currentScroll;
}, false);
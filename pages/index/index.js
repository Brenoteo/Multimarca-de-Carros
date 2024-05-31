// Scroll suave
document.addEventListener("DOMContentLoaded", function() {
  var headerTitle = document.querySelector(".header-title");

  headerTitle.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Menu hamburguer
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
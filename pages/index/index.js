document.addEventListener("DOMContentLoaded", function() {
  var headerTitle = document.querySelector(".header-title");

  headerTitle.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
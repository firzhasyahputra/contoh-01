document.getElementById("menu-toggle").addEventListener("click", function () {
  var navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");

  var bars = document.querySelectorAll(".bar");
  bars.forEach(function (bar) {
    bar.classList.toggle("active");
  });
});

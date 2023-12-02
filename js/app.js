const express = require("express");
const app = express();
const path = require("path");
const port = 3030;
document.addEventListener("DOMContentLoaded", () => {
  //selección de elementos DOM
  const toggleButton = document.querySelector(".navbar__toogle-btn");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");
  // Si el menú está oculto ('none' o vacio), lo muestra cambiando a 'flex'.
  //Si el menú movil ya está visible ('flex'), lo oculta cambiando a 'none'.

  const toggleMenu = () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "none" || mobileMenu.style.display === ""
        ? "flex"
        : "none";
  };
  //funcion para ocultar ell menu despegable
  const hideMenuResize = () => {
    mobileMenu.style.display = "none";
  };
  //evente listener o eventos de escucha
  toggleButton.addEventListener("click", toggleMenu);
  window.addEventListener("resize", hideMenuResize);
  window.addEventListener("load", hideMenuResize);
});

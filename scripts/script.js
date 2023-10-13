const menu__icon = document.querySelector(".menu__icon");

menu__icon.addEventListener("click" , () => {
  document.documentElement.classList.toggle("menu-open");
})
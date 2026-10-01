document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const menuIcon = document.createElement("div");

  menuIcon.className = "menu-icon";
  for (let i = 0; i < 3; i++) {
    menuIcon.appendChild(document.createElement("span"));
  }

  header.insertBefore(menuIcon, nav);

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    nav.classList.toggle("active");
  });
});

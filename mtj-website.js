const menuToggle = document.getElementById("menu-toggle");


menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

navBar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});
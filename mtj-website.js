const menuToggle = document.getElementById("menu-toggle");
const FormValidation = document.getElementById("form");
const FormValidation = document.getElementById("form");
const FormValidation = document.getElementById("form")
const FormValidation = document.getElementById("form")
const FormValidation = document.getElementById("form")



menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});


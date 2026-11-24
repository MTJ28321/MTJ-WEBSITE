const menuToggle = document.getElementById("menu-toggle");
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const company = document.getElementById("company");
const textArea = document.getElementById("text-area");
const submitBtn = document.getElementById("submit-btn");


//FOR TOGGLE PAGE
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

// FOR FORM VALIDATION




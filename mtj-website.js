const menuToggle = document.getElementById("menu-toggle");
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const company = document.getElementById("company");
const textArea = document.getElementById("text-area");
const submitBtn = document.getElementById("submit-btn");
const error = document.getElementById("Error");


//FOR TOGGLE PAGE
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// FOR FORM VALIDATION

form.addEventListener("submit", () => {
  e.preventDefault();
  if(name.value.trim() || email.value.trim() || company.value.trim() || textArea.value.trim() === "") {
    error.textContent = "Oga ade! Go back and fill the form";
    error.style.color = "white";
  }
})


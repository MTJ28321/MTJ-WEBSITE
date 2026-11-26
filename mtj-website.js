const menuToggle = document.getElementById("menu-toggle");
const navBar = document.getElementById("navbar");

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const company = document.getElementById("company");
const textArea = document.getElementById("text-area");
const submitBtn = document.getElementById("submit-btn");
const error = document.getElementById("Error");


//FOR TOGGLE PAGE
menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

navBar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

// FOR FORM VALIDATION

form.addEventListener("submit", (e) => {
  if(name.value.trim() === "" || email.value.trim() === "" || company.value.trim() === "" || textArea.value.trim() === "") {
    e.preventDefault();
    error.textContent = "Oga ade! Go back and fill the form";
    error.style.color = "white";
    error.style.fontSize = "16px";
  } else {
    e.preventDefault();
    error.textContent = "submitting....";
    
    

    setTimeout(() => {
      error.textContent = "Your massage is successfully received";
      error.style.color = "green";
      
      form.reset();
    }, 3000);
  }
   
})


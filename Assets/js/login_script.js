const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});


// ===============validation==================
document.getElementById("signin").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Perform form validation
  var nameInput = document.querySelector(".sign-in-form .input-field");
  if (nameInput.value === "") {
    alert("Please fill in the name field.");
    return;
  }

  // Redirect if form is valid
  window.location.href = "hero_page.html"; // Replace "https://example.com" with the URL you want to redirect to
});


// ===============when clicked==================
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Show pop-up message
    alert("Your account is set. Log in now!");
    
    // Additional actions can be added here, such as redirecting to the login page
});





let currentIndex = 1; // Start at the second image (index 1)
const totalSlides = document.querySelectorAll(".slider-item").length;

function showSlide(index) {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slideWidth = document.querySelector(".slider-item").clientWidth;
  sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Initially show the second image
showSlide(currentIndex);

function scrollToRegistration() {
  const registrationSection = document.getElementById("registration");
  registrationSection.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  // Validation logic here
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (!nameInput.checkValidity()) {
    nameError.textContent = "Please enter your name.";
    event.preventDefault();
  } else {
    nameError.textContent = "";
  }

  const companyInput = document.getElementById("company");
  const companyError = document.getElementById("companyError");
  if (!companyInput.checkValidity()) {
    companyError.textContent = "Please enter your company name.";
    event.preventDefault();
  } else {
    companyError.textContent = "";
  }

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!emailInput.checkValidity()) {
    emailError.textContent = "Please enter a valid email address.";
    event.preventDefault();
  } else {
    emailError.textContent = "";
  }

  // Additional name and email validations
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = "Invalid name format.";
    event.preventDefault();
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Invalid email format.";
    event.preventDefault();
  }
});

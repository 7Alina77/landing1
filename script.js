const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const menuLinks = document.querySelectorAll('#mobile-menu a');

// Открыть меню
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

// Закрыть меню
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

// Закрыть меню при клике на пункт меню
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });
});

function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  const inputValues = {
    fullName: null,
    email: null,
    aboutProject: null,
  };

  // Validate Full Name
  const nameInput = document.getElementById('full-name');
  const nameError = document.getElementById('name-error');
  const nameValue = nameInput.value.trim();

  if (!nameValue) {
    nameError.classList.remove('invisible');
    nameInput.classList.add('border-red');
    isValid = false;
  } else if (nameValue.length < 3) {
    nameError.classList.remove('invisible');
    nameInput.classList.add('border-red');
    isValid = false;
  } else if (nameValue.length > 15) {
    nameError.classList.remove('invisible');
    nameInput.classList.add('border-red');
    isValid = false;
  } else {
    nameError.classList.add('invisible');
    nameInput.classList.remove('border-red');
  }

  // Validate Email
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
    emailError.classList.remove('invisible');
    emailInput.classList.add('border-red');
    isValid = false;
  } else {
    emailError.classList.add('invisible');
    emailInput.classList.remove('border-red');
  }

  // AboutProject
  const aboutProjectInput = document.getElementById('project-description');

  if (isValid) {
    console.log('Form submitted successfully!');
    inputValues.fullName = nameInput.value;
    inputValues.email = emailInput.value;
    inputValues.aboutProject = aboutProjectInput.value;
    console.log(inputValues);
  } else {
    console.log('Error in form');
  }
}
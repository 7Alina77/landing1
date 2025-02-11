const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const menuLinks = document.querySelectorAll('#mobile-menu a');
const getInTouch = document.getElementById('getInTouch');
const nameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const aboutProjectInput = document.getElementById('project-description');

//якорь по кнопке на секцию с формой
function scrollToSection() {
  getInTouch.scrollIntoView({
    behavior: 'smooth'
  });
}

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
  if (isValid) {
    submitForm(event)
  } else {
    console.log('Error in form');
  }
}

function submitForm(event) {
  event.preventDefault();

  const inputValues = {
    fullName: nameInput.value.trim(),
    email: emailInput.value.trim(),
    aboutProject: aboutProjectInput.value.trim(),
  };

  nameInput.value = '';
  emailInput.value = '';
  aboutProjectInput.value = '';

  console.log('Form submitted successfully!', inputValues);
}

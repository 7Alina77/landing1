function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  // Validate Full Name
  const nameInput = document.getElementById('full-name');
  const nameError = document.getElementById('name-error');
  if (!nameInput.value.trim()) {
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

  if (isValid) {
    console.log('Form submitted successfully!');
    // Proceed with form submission logic
  } else {
    console.log('Error');
  }
}
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const fieldName = event.target.name;

  if (fieldName !== 'email' && fieldName !== 'message') {
    return;
  }

  formData[fieldName] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, message } = formData;

  if (email.trim() === '' || message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
}

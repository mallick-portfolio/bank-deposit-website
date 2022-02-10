// DOM Selection
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkBox = document.getElementById('myCheck');
const submit = document.getElementById('submit');

function validateForm() {
  let checkEmail = email.value;
  let checkPassword = password.value;
  if (checkEmail === 'tamal@gmail.com' && checkPassword === 'bankaccount') {
    return true;
  } else {
    return false;
  }
}

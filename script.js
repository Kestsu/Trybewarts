const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const buttonLogin = document.getElementById('buttonLogin');

function validacao() {
  const inputEmailValido = inputEmail.value;
  const inputPasswordValido = inputPassword.value;
  if (
    inputEmailValido === 'tryber@teste.com' && inputPasswordValido === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', validacao);

const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
submitBtn.disabled = true;

function ok() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agreement.addEventListener('change', ok);

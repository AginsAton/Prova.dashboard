let divLogin = document.querySelector('.container__login');
let divDash = document.querySelector('.container__dashboard');
function sair() {
  alert('Vaza fião!');
  divDash.style.display = 'none';
  divLogin.style.display = 'flex';
}

function logar() {
  alert('Só entra quem é corno!');
  divLogin.style.display = 'none';
  divDash.style.display = 'flex';
}

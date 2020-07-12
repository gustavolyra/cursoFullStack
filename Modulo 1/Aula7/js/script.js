window.addEventListener('load', start);

function start() {
  console.log('Aula 7');
  console.log('Página Carregada');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName(event) {
  console.log(event);
  var count = event.target.value;
  var span = document.querySelector('#nameLength');
  if (count.length === 0) {
    span.textContent = '';
  } else {
    span.textContent = count.length;
  }
}

function preventSubmit(event) {
  event.preventDefault();
  var nameInput = document.querySelector('#nameInput');
  alert(nameInput.value + ' cadastrado com sucesso');
}

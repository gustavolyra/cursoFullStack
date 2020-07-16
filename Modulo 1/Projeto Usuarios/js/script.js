let listAllUsers = [];
let listUserFound = [];

window.addEventListener('load', () => {
  preventFormSubmit();
  disableButton();
  clearInput();

  let inputText = document.getElementById('searchInput');
  inputText.textContent = '';
  inputText.addEventListener('keyup', keyUpEvent);
  let button = document.getElementById('button');
  button.addEventListener('click', clickEvent);
  getApiAsync();
});

const clickEvent = () => {
  console.log('click event');
  let listFound = listUserFound;
  renderForm(listFound);
};

const renderForm = (listFound) => {
  console.log('render');
  renderDivStatic(listFound);
  renderDivFound(listFound);
};

const getApiAsync = async () => {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json().then((data) => {
    const list = doMap(data.results);
    listAllUsers = list;
  });
};

const keyUpEvent = (event) => {
  if (event.target.value.trim() === '') {
    console.log('STRING NULA');
    disableButton();
  } else {
    let found = doFilter(listAllUsers, event.target.value.trim());
    listUserFound = found;
    console.log(found);
    enableButton();
    if (event.keyCode === 13) {
      document.getElementById('button').click();
    }
    //renderDivFound(found);
  }
};

const cleanDiv = (div) => (div.innerHTML = '');

const renderDivFound = (data) => {
  console.log('hey its me render');
  function createSpan(name) {
    let span = document.createElement('span');
    span.textContent = name;
    return span;
  }
  const topInfo = (size) => {
    let span = document.getElementById('spanUser');
    if (size > 1) {
      span.textContent = 'Usuários encontrados : ' + found.length;
    }
    if (size === 1) {
      span.textContent = 'Usuário encontrado : ' + found.length;
    }
    if (size === 0) {
      span.textContent = 'Nenhum usuário encontrado';
    }
  };
  function createImg(name, url) {
    let img = document.createElement('img');
    img.setAttribute('src', url);
    let alt = 'Foto do perfil de ' + name;
    img.setAttribute('alt', alt);
    img.classList.add('profile-img');
    return img;
  }

  let found = doMapFound(data);
  console.log(found);
  let div = document.getElementById('usersFound');
  cleanDiv(div);
  topInfo(found.length);

  let ul = document.createElement('ul');

  found.forEach((person) => {
    let li = document.createElement('li');
    let img = createImg(person.name, person.picture);
    let div2 = document.createElement('div');
    let span1 = createSpan(person.name + ', ' + person.age);

    div2.appendChild(span1);
    li.appendChild(img);
    li.appendChild(div2);
    ul.appendChild(li);
  });
  div.appendChild(ul);
};

const renderDivStatic = (listFound) => {
  const makeSpan = (ul, str) => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = str;
    li.appendChild(span);
    ul.appendChild(li);
    return ul;
  };

  let onlyMen = filterMan(listFound);
  let totalMen = onlyMen.length;
  let onlyWoman = filterWoman(listFound);
  let totalWoman = onlyWoman.length;
  let totalAge = reduceAge(listFound);
  let medAge = totalAge / (totalMen + totalWoman);
  let formatMedAge = formatNumber(medAge);

  let div = document.getElementById('information');
  cleanDiv(div);
  let ul = document.createElement('ul');

  let span1 = makeSpan(ul, 'Sexo Masculino: ' + totalMen);
  let span2 = makeSpan(ul, 'Sexo Feminino: ' + totalWoman);
  let span3 = makeSpan(ul, 'Total Idade: ' + totalAge);
  let span4 = makeSpan(ul, 'Média Idade: ' + formatMedAge);

  div.appendChild(ul);
};

function formatNumber(number) {
  numberFormat = Intl.NumberFormat('pt-BR');
  return numberFormat.format(number);
}

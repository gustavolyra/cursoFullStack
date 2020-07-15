window.addEventListener('load', () => {
  preventFormSubmit();

  getApiAsync();
});

function preventFormSubmit() {
  const handleFormSubmit = (event) => event.preventDefault();

  let form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

const getApiAsync = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json().then((data) => {
    const list = doMap(data);
    const orderList = list.sort((a, b) => {
      return a.name - b.name;
    });
    makeForm(orderList);
  });
};

const makeForm = (fullList) => {
  const createDiv = (id, dados) => {
    const cleanDiv = (div) => (div.innerHTML = '');

    const createTopInfo = (ul) => {
      const createFirstLine = () => {
        let li = document.createElement('li');
        let h3 = document.createElement('h3');
        h3.textContent = 'Número total de Países: ' + dados.length;
        li.appendChild(h3);
        return li;
      };

      const createSecondLine = () => {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');

        h4.textContent = getPopulation(dados);
        li.appendChild(h4);
        return li;
      };

      const li1 = createFirstLine();
      ul.appendChild(li1);
      const li2 = createSecondLine();
      ul.appendChild(li2);
    };

    function createImage(name, url) {
      let img = document.createElement('img');
      img.setAttribute('src', url);
      let stringAlt = 'Bandeira do país ' + name;
      img.setAttribute('alt', stringAlt);
      img.classList.add('flag');
      return img;
    }

    function createFavoriteButton(countryName) {
      function changeStatus() {
        const newList = changeMap(fullList, countryName).sort();
        makeForm(newList);
      }

      let button = document.createElement('button');
      button.classList.add(id);
      button.textContent = '+';
      button.addEventListener('click', changeStatus);
      return button;
    }

    function createSpan(name, index) {
      let span = document.createElement('span');
      span.textContent = name;
      return span;
    }

    let div = document.getElementById(id);
    cleanDiv(div);
    let ul = document.createElement('ul');
    createTopInfo(ul, dados);

    dados.forEach((country, i) => {
      let li = document.createElement('li');
      let img = createImage(country.name, country.flag);
      let button = createFavoriteButton(country.name);
      let spam = createSpan(country.name, i);

      li.appendChild(button);
      li.appendChild(img);
      li.appendChild(spam);
      ul.appendChild(li);
    });

    div.appendChild(ul);
  };

  let listOther = doMapOther(fullList);
  createDiv('otherCountries', listOther);

  let listFavorite = doMapFavorite(fullList);
  createDiv('favoriteCountries', listFavorite);
};

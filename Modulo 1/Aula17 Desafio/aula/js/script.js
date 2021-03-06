let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');
  totalPopulationList = document.querySelector('#totalPopulationList');

  totalPopulationFavorites = document.getElementById(
    'totalPopulationFavorites'
  );

  numberFormat = Intl.NumberFormat('pt-BR');
  fetchCountriesAsync();
});

async function fetchCountriesAsync() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map((country) => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.name,
      population,
      flag,
    };
  });
  render();
}

function render() {
  renderCountryList();
  renderFavorite();
  renderSummary();
  handleCountryButtons();
}

function renderCountryList() {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    const { name, flag, id, population } = country;

    const countryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn">+</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}">
        </div>
        <div>
          <li>"${name}"</li>
          <li>"${population}"</li>
        </div>
      </div>
    `;
    countriesHTML += countryHTML;
  });
  countriesHTML += '</div>';

  tabCountries.innerHTML = countriesHTML;
}

function renderFavorite() {
  let favoritesHTML = '<div>';
  favoriteCountries.forEach((country) => {
    const { name, flag, id, population } = country;
    const favoriteCountryHTML = `
    <div class='country'>
      <div>
        <a id="${id}" class="waves-effect waves-light btn">+</a>
      </div>
      <div>
        <img src="${flag}" alt="${name}">
      </div>
      <div>
        <li>"${name}"</li>
        <li>"${population}"</li>
      </div>
    </div>
  `;
    favoritesHTML += favoriteCountryHTML;
  });
  favoritesHTML += '</div>';
  tabFavorites.innerHTML = favoritesHTML;
}
function renderSummary() {}
function handleCountryButtons() {}

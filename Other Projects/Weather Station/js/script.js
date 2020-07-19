API_KEY = '407e88c4c8854c32931eb7fb5de47dc9';

window.addEventListener('load', () => {
  preventFormSubmit();

  let button = document.getElementById('button');
  button.addEventListener('click', searchWeather);
});

const validFields = () => {
  const validCity = () => {
    let city = document.getElementById('cidade');
    if (city.value.length < 2) {
      console.log('erro precisa digitar um nome de cidade valido');
      return false;
    } else {
      console.log('city: ' + city.value);
      return true;
    }
  };

  const validCountry = () => {
    let country = document.getElementById('pais');
    if (country.value.length !== 2) {
      console.log('erro precisa digitar um nome de pais valido');
      return false;
    } else {
      console.log('Country: ' + country.value);
      return true;
    }
  };
  let isCityOk = validCity();
  let isCountryOk = validCountry();
  if (isCityOk && isCountryOk) {
    return true;
  } else {
    return false;
  }
};

const searchWeather = () => {
  if (validFields()) {
    console.log('Funciona');
    getApiAsync();
  } else {
    console.log('Error');
  }
};

const getApiAsync = async () => {
  const buildApi = () => {
    const apiBegin = 'https://api.weatherbit.io/v2.0/current?';
    let city = document.getElementById('cidade').value;
    let country = document.getElementById('pais').value;

    let strApi =
      apiBegin + 'city=' + city + ',' + country + '&lang=pt&key=' + API_KEY;
    return strApi;
  };
  console.log(buildApi());
  try {
    const res = await fetch(buildApi());
    const json = await res.json().then((data) => {
      validData(data);
    });
  } catch (e) {
    console.log(e);
    doRenderError();
  }
};

const validData = (data) => {
  if (data.error === 'Invalid Parameters supplied') {
    doRenderError();
  } else {
    doRender(data.data[0]);
  }
};

const doRenderError = () => {
  let div = document.getElementById('information');
  div.innerHTML = '';
  let span = document.createElement('span');
  span.textContent = 'Erro parâmetros inválidos';
  span.classList.add('error_msg');
  div.appendChild(span);
};

const doRender = (dataList) => {
  const buildForm = (div, value) => {
    let divSub = document.createElement('div');
    divSub.classList.add('col');
    divSub.classList.add('s6');
    divSub.classList.add('m3');
    let a = document.createElement('a');
    a.classList.add('text');
    a.text = value;
    divSub.appendChild(a);
    div.appendChild(divSub);
  };

  const clearDiv = (div) => {
    div.innerHTML = '';
  };

  const buildDescription = (div) => {
    const buildComponentWithIcon = (div, iconPath, description) => {
      let div1 = document.createElement('div');
      let a1 = document.createElement('a');
      let img1 = document.createElement('img');
      div1.classList.add('col');
      div1.classList.add('s6');
      div1.classList.add('m3');
      a1.textContent = description;
      a1.classList.add('text');

      img1.src = iconPath;
      img1.classList.add('img');
      a1.appendChild(img1);
      div1.appendChild(a1);
      div.appendChild(div1);
    };
    let iconPath = './img/icons/' + dataList.weather.icon + '.png';
    let description = dataList.weather.description;
    buildComponentWithIcon(div, iconPath, description);
  };

  const buildTemp = (div) => {
    const buildTempWithIcon = (div, iClass, description) => {
      let div1 = document.createElement('div');
      let a1 = document.createElement('a');
      let i1 = document.createElement('i');
      div1.classList.add('col');
      div1.classList.add('s6');
      div1.classList.add('m3');
      a1.textContent = description;
      a1.classList.add('text');
      //i1.src = './img/icons/' + dataList.weather.icon + '.png';
      i1.classList.add('fa');
      i1.classList.add(iClass);
      a1.appendChild(i1);
      div1.appendChild(a1);
      div.appendChild(div1);
    };
    let temp = dataList.temp;
    let iClass = 'fa-thermometer-empty';
    if (temp > 10) {
      iClass = 'fa-thermometer-quarter';
    }
    if (temp > 20) {
      iClass = 'fa-thermometer-half';
    }
    if (temp > 30) {
      iClass = 'fa-thermometer-three-quarters';
    }
    if (temp > 40) {
      iClass = 'fa-thermometer-full';
    }
    let description = 'Temperatura : ' + temp + ' C  ';
    buildTempWithIcon(div, iClass, description);
  };

  console.log(dataList);
  let div = document.getElementById('information');
  clearDiv(div);
  div.classList.add('card-panel');
  div.classList.add('light-blue');
  div.classList.add('lighten-3');
  buildDescription(div);
  buildTemp(div);

  buildForm(div, 'Temperatura : ' + dataList.temp + ' C');
  buildForm(div, 'Ultima Coleta : ' + dataList.ob_time);
  buildForm(div, 'Nascer do Sol : ' + dataList.sunrise);
  buildForm(div, 'Temperatura Aparente : ' + dataList.app_temp + ' C');
  buildForm(div, 'Horário local : ' + dataList.datetime);
  buildForm(div, 'Por do Sol : ' + dataList.sunset);
  buildForm(div, 'Humidade : ' + dataList.rh + ' %');
  buildForm(div, 'Porcentagem de Nuvens : ' + dataList.clouds);
  buildForm(
    div,
    'Cidade : ' + dataList.city_name + ', ' + dataList.country_code
  );
  buildForm(div, 'Velocidade do Vento : ' + dataList.wind_spd);
};

function preventFormSubmit() {
  const handleFormSubmit = (event) => event.preventDefault();
  let form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

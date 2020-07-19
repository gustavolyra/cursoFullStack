window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureC = 0;
  let temperatureF = 0;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${long}&lang=pt&key=407e88c4c8854c32931eb7fb5de47dc9`;
      getApiAsync(api).then((data) => {
        stopLoading();
        temperatureF = calcTempF(data.temp);
        temperatureC = formatNumber(data.temp);
        render(data);
      });
    });
  }
  const temperatureSpan = document.querySelector('.temperature span');
  const degreeSection = document.querySelector('.degree-section');
  degreeSection.addEventListener('click', () => {
    const temperatureSection = document.querySelector('.temperature');
    const temperatureDegree = document.querySelector('.temperature-degree');

    if (temperatureSpan.textContent === 'C') {
      temperatureSpan.textContent = 'F';
      temperatureDegree.textContent = temperatureF;
    } else {
      temperatureSpan.textContent = 'C';
      temperatureDegree.textContent = temperatureC;
    }
  });
});

const stopLoading = () => {
  const loading = document.querySelector('.loader-wrapper');
  loading.style.display = 'none';
};

const calcTempF = (tempC) => {
  //prettier-ignore
  let tempF = tempC * 1.8 + 32;
  let tempFFormatted = formatNumber(tempF);
  return tempFFormatted;
};

const getApiAsync = async (api) => {
  const res = await fetch(api);
  const json = await res.json().then((data) => data.data[0]);
  return json;
};

const showIcon = (icon) => {
  let div = document.querySelector('.location');
  let img = document.createElement('img');
  img.src = './img/icons/' + icon + '.png';
  div.appendChild(img);
};

const render = (data) => {
  const temperatureDegree = document.querySelector('.temperature-degree');
  const locationTimezone = document.querySelector('.location-timezone');
  const locationCity = document.querySelector('.location-city');
  const temperatureDescription = document.querySelector(
    '.temperature-description'
  );
  const { temp, weather, timezone, city_name, country_code } = data;

  temperatureDegree.textContent = temp;
  temperatureDescription.textContent = weather.description;
  let timeZoneFormatted = timezone.replace('_', ' ');
  let cityNameFormatted = city_name.replace('_', ' ');
  locationTimezone.textContent = timeZoneFormatted;
  locationCity.textContent = cityNameFormatted + ', ' + country_code;
  showIcon(weather.icon);
};

function formatNumber(number) {
  numberFormat = Intl.NumberFormat('pt-BR');
  return numberFormat.format(number);
}

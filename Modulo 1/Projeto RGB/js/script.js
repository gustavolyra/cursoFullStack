window.addEventListener('load', start);

function start() {
  function createSlider(id) {
    var slider = document.getElementById(id);
    slider.addEventListener('change', UpdateColor);
    slider.value = 0;
  }

  console.log('Projeto Modulo 1');
  console.log('Página Carregada');

  createSlider('sliderRed');
  createSlider('sliderGreen');
  createSlider('sliderBlue');
  setStatus('statusRed', 0);
  setStatus('statusGreen', 0);
  setStatus('statusBlue', 0);
}

function setStatus(color, value) {
  var status = document.getElementById(color);
  status.value = value;
}

function UpdateColor(event) {
  function changeColor() {
    function getColorValue(id) {
      var status = document.getElementById(id);
      var value = status.value;
      return value;
    }
    function RGB() {
      var red = getColorValue('statusRed');
      var green = getColorValue('statusGreen');
      var blue = getColorValue('statusBlue');

      return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }

    var str = RGB();
    divColor.style.background = str;
  }

  var slider = event.target.id;
  var value = event.target.value;
  switch (slider) {
    case 'sliderRed':
      setStatus('statusRed', value);
      break;
    case 'sliderGreen':
      setStatus('statusGreen', value);
      break;
    case 'sliderBlue':
      setStatus('statusBlue', value);
      break;
  }
  changeColor();
}

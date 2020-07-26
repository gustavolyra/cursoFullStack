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
  setStatus('Red', 0);
  setStatus('Green', 0);
  setStatus('Blue', 0);
  updateText(0, 0, 0);

  let button = document.getElementById('btn');
  button.addEventListener('click', generateRandomColor);
}

function setStatus(color, value) {
  var status = document.getElementById('status' + color);
  status.value = value;
  var slider = document.getElementById('slider' + color);
  slider.value = value;
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
      updateText(red, green, blue);
      return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }

    var str = RGB();
    let divContainer = document.querySelector('.container');
    divContainer.style.background = str;
  }

  var slider = event.target.id;
  var value = event.target.value;
  switch (slider) {
    case 'sliderRed':
      setStatus('Red', value);
      break;
    case 'sliderGreen':
      setStatus('Green', value);
      break;
    case 'sliderBlue':
      setStatus('Blue', value);
      break;
  }
  changeColor();
}

const updateText = (red, green, blue) => {
  const intToHex = (num) => {
    let str = '';
    if (num < 15) {
      str = '0';
    }
    str += num.toString(16);
    return str;
  };

  let hexString = '#';
  hexString += intToHex(parseInt(red));
  hexString += intToHex(parseInt(green));
  hexString += intToHex(parseInt(blue));
  const color = document.querySelector('.color');
  color.textContent = hexString.toUpperCase();
};

const generateRandomColor = () => {
  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 255);
    return color;
  };
  const RGB = () => {
    let red = getRandomColor();
    setStatus('Red', red);
    let green = getRandomColor();
    setStatus('Green', green);
    let blue = getRandomColor();
    setStatus('Blue', blue);
    updateText(red, green, blue);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  };

  var str = RGB();
  let divContainer = document.querySelector('.container');
  divContainer.style.background = str;
};

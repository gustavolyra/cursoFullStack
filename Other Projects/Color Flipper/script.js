const colors = ['green', 'red', 'rgba(133, 122, 200)', '#F15025'];

window.addEventListener('load', () => {
  const button = document.getElementById('btn');

  button.addEventListener('click', changeColor);
});

function changeColor() {
  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 255);
    return color;
  };
  const updateText = (red, green, blue) => {
    let hexString = '#';
    hexString += red.toString(16);
    hexString += green.toString(16);
    hexString += blue.toString(16);
    const color = document.querySelector('.color');
    color.textContent = hexString;
  };
  const RGB = () => {
    let red = getRandomColor();
    let green = getRandomColor();
    let blue = getRandomColor();
    updateText(red, green, blue);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  };

  var str = RGB();

  const body = document.getElementById('body');
  body.style.background = str;
  console.log(body.style.background);
}

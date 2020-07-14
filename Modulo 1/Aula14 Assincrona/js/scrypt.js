window.addEventListener('load', () => {
  const timer = document.querySelector('#timer');
  let count = 0;

  const interval = setInterval(() => {
    count += 1;
    timer.textContent = count;
    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = 'Div/5';
      }, 500);
    }
  }, 1000);

  const clear = setTimeout(() => {
    clearInterval(interval);
  }, 20000);
});

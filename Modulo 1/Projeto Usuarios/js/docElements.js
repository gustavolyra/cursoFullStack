function preventFormSubmit() {
  const handleFormSubmit = (event) => event.preventDefault();
  let form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

const enableButton = () => {
  let button = document.getElementById('button');
  button.disabled = false;
};

const disableButton = () => {
  let button = document.getElementById('button');
  button.disabled = true;
};

const clearInput = () => {
  let inp = document.getElementById('searchInput');
  inp.value = '';
};

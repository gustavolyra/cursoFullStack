let globalNames = ['Um', 'Dois', 'Tres', 'Quatro'];
let nameInput = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener('load', () => {
  preventFormSubmit();
  nameInput = document.querySelector('#nameInput');
  render();
  startInput();
});

function preventFormSubmit() {
  const handleFormSubmit = (event) => event.preventDefault();

  let form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function startInput() {
  const insertName = (newName) => (globalNames = [...globalNames, newName]);

  const updateName = (word) => {
    globalNames[currentIndex] = word;
    currentIndex = null;
  };

  function handleTyping(event) {
    if (event.key === 'Enter') {
      let word = event.target.value;

      if (word.trim().length > 0) {
        if (isEditing) {
          isEditing = false;
          updateName(word);
        } else {
          let typedName = word;
          insertName(typedName);
        }
        render();
      } else {
        clearInput();
      }
    }
  }

  nameInput.focus();
  nameInput.addEventListener('keyup', handleTyping);
}

function render() {
  function createSpan(name, index) {
    function editItem() {
      nameInput.value = name;
      nameInput.focus();
      isEditing = true;
      currentIndex = index;
    }

    let span = document.createElement('span');
    span.textContent = name;
    span.classList.add('clickable');
    span.addEventListener('click', editItem);
    return span;
  }

  function createDeleteButton(index) {
    function deleteName() {
      globalNames = globalNames.filter((_, i) => i !== index);
      render();
    }

    let button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';
    button.addEventListener('click', deleteName);
    return button;
  }

  const cleanDiv = (div) => (div.innerHTML = '');

  let divNames = document.querySelector('#names');
  cleanDiv(divNames);
  let ul = document.createElement('ul');

  globalNames.forEach((name, i) => {
    let li = document.createElement('li');
    let button = createDeleteButton(i);
    let span = createSpan(name, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  });

  divNames.appendChild(ul);
  clearInput();
}

const clearInput = () => {
  nameInput.value = '';
  nameInput.focus();
};

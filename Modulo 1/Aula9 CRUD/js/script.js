window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Tres', 'Quatro'];
var nameInput = null;
var isEditing = false;
var currentIndex = null;

function start() {
  preventFormSubmit();
  nameInput = document.querySelector('#nameInput');
  render();
  startInput();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function startInput() {
  function insertName(newName) {
    globalNames.push(newName);
  }

  function updateName(word) {
    globalNames[currentIndex] = word;
    currentIndex = null;
  }

  function handleTyping(event) {
    if (event.key === 'Enter') {
      var word = event.target.value;

      if (word.trim().length > 0) {
        if (isEditing) {
          isEditing = false;
          updateName(word);
        } else {
          var typedName = word;
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

    var span = document.createElement('span');
    span.textContent = name;
    span.classList.add('clickable');
    span.addEventListener('click', editItem);
    return span;
  }

  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }

    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';
    button.addEventListener('click', deleteName);
    return button;
  }

  function cleanDiv(div) {
    div.innerHTML = '';
  }

  var divNames = document.querySelector('#names');
  cleanDiv(divNames);
  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  nameInput.value = '';
  nameInput.focus();
}

// var ul = document.createElement('ul');
//   var li1 = document.createElement('li');
//   var li2 = document.createElement('li');
//   li1.textContent = 'Primeiro';
//   li2.textContent = 'Segundo';
//   ul.appendChild(li1);
//   ul.appendChild(li2);
//   divNames.appendChild(ul);

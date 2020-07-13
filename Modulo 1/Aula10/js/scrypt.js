'use strict';

window.addEventListener('load', start);

function start() {
  //withVar();
  //withLet();
  console.log(sum(1, 2));
  console.log(sum2(1, 2));
  console.log(sum3(1, 2));
  console.log(sum4(1, 2));
  templateLiteral();

  //função com valor default
  console.log(sum5(1, 2));
  console.log(sum5(1));
  console.log(sum5());
}

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }
  //com var é possivel acessar a variavel i mesmo fora do for
  i = 20;
  console.log(i);
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('var' + i);
  }
  //com let gera um erro ao tentar acessar i fora do for
  // i = 20;
  // console.log(i);
}

//Formas de Declarar funções
function sum(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

const sum3 = (a, b) => {
  return a + b;
};
const sum4 = (a, b) => a + b;

const sum5 = (a = 10, b = 5) => a + b;

const templateLiteral = () => {
  //template literals
  const name = 'Gustavo';
  const surName = 'Lyra';
  const text1 = 'Meu nome é ' + name + ' ' + surName;
  console.log(text1);
  const text2 = `Meu nome é ${name} ${surName}`;
  console.log(text2);
};

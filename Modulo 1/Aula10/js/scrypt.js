'use strict';

window.addEventListener('load', start);

function start() {
  withVar();
  withLet();
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
  i = 20;
  console.log(i);
}

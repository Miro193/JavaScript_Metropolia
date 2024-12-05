'use strict';
// const operations = [];
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const ope = document.querySelector('#operation');
const p = document.getElementById('result');

const btn = document.querySelector('#start');


btn.addEventListener('click', function () {
  if (ope.value === 'add') {
    const calc = parseInt(num1.value) + parseInt(num2.value);
    p.innerHTML = calc;
  }
  else if (ope.value === 'sub') {
    const calc = parseInt(num1.value) - parseInt(num2.value);
    p.innerHTML = calc;
  }
  else if (ope.value === 'multi') {
    const calc = parseInt(num1.value) * parseInt(num2.value);
    p.innerHTML = calc;
  }
  else if (ope.value === 'div') {
    const calc = parseInt(num1.value) / parseInt(num2.value);
    p.innerHTML = calc;
  }
});
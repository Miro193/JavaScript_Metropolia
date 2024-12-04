'use strick'

let answer = confirm('Should I calculate the square root?');
let num, calc, tulos;

if (answer === true) {
  num = prompt('Give a number: ');
  while (num < 1) {
    num = prompt(`The square root of a negative number is not defined. Give a new number, please.`);
  }
  calc = Math.sqrt(num);
  tulos = calc;
}
else {
  tulos = 'No calculations needed.'
}


document.querySelector('#target').innerHTML = tulos;
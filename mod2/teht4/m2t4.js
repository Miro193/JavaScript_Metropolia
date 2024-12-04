// Write a program that asks the user for numbers until he gives zero. 
// The given numbers are printed in the console from the largest to the smallest. (2p)
'use strick';
const luku = 0;
let numero = parseInt(prompt("Numero 0 lopettaa ohjelman, anna numero: "));
const numerot = [];

if (numero > luku) {
  while (numero != luku) {
    numero = parseInt(prompt("Numero 0 lopettaa ohjelman, anna numero: "));
    if (numero === 0) {
      console.log(`Annoit viimeiseksi numeron : ${numero}, numerot ovat : ${numerot.sort((b, a) => a - b)}`);
      document.querySelector('#target').innerHTML = numerot.sort((b, a) => a - b);
    }
    else {
      numerot.push(numero);
    }
  }
  // console.log(`Annoit ${numero}${numerot.sort((b, a) => a - b)}`);
  // document.querySelector('#target').innerHTML = numerot.sort((b, a) => a - b);
}

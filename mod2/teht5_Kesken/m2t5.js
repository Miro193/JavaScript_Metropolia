// Write a program that prompts the user for numbers. 
// When the user enters one of the numbers he previously entered, 
// the program will announce that the number has already been given and stops 
// its operation and then prints all the given numbers to the console in ascending order. (2p)

'use strick';

// const numero = parseInt(prompt("Anna kokonaisluku: "));
const numerot = [];
let loyty = false;

while (loyty == false) {
  const numero = parseInt(prompt("Anna kokonaisluku: "));
  console.log("syöttö" + numero);

  if (numero === 0 || numero == NaN) {
    break;
  }
  if (numerot == 0) {
    console.log("eka" + numerot);
    // numerot.push(numero);
    // for (luku in numerot) {
    //   if (numero === luku) {
    //     console.log(numero)
    //     console.log("toka" + numerot)
    //     // numerot.push(numero);
    //     loyty = true;
    //   }
    //   else {
    //     numerot.push(numero);
    //   }
    // }
  }
  else {
    numerot.push(numero);
  }
}

// numerot.sort((a, b) => a - b);
// numerot.sort((a, b) => a - b);
console.log(numerot.sort((a, b) => a - b));

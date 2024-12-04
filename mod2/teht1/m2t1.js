// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.

'use strick';

const numerot = [];
let summa = 0;

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt(`Anna numero: `));
  summa += numero;
  numerot.push(numero);
}
for (let j = numerot.length - 1; j >= 0; j--) {
  console.log(numerot[j]);
}
console.log(summa);
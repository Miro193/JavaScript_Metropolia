// Write a function called concat(), which receives an array of strings as a parameter. 
// The function returns a string formed by concatenating the elements of the array. (2p)

'use strick';

function concat(array) {
  for (let i = 0; i < array.length; i++) {
    array[i];
  }
  return array;
}

const names = ["Johnny", "DeeDee", "Joey", "Marky"]
let answer = concat(names);
let allTheNames = "";

for (x in answer) {
  allTheNames += answer[x];
}

console.log(allTheNames);
document.querySelector('#target').innerHTML = allTheNames;
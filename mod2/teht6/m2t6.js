// Write a function that returns a random dice roll between 1 and 6. 
// The function should not have any parameters. Write a main program that 
// rolls the dice until the result is 6. The main program should print out 
// the result of each roll in an unordered list (<ul>). (2p)

'use strick';

function dice() {
  const noppa = Math.floor(Math.random() * 6) + 1;
  return noppa;
}

let heitto = dice();

if (heitto == 6) {
  document.querySelector('#target').innerHTML += `<li>${heitto}</li>`;
}
else {
  while (heitto != 6) {
    heitto = dice();
    // console.log(heitto);
    document.querySelector('#target').innerHTML += `<li>${heitto}</li>`;
  }
}

'use strick';

const lukum = prompt("Kunka monta osallistujaa? ");
const osallistujat = [];

for (let i = 0; i < lukum; i++) {
  let osallistuja = prompt("Osallistujan nimi: ");
  osallistujat.push(osallistuja);
  console.log(osallistujat);
}

osallistujat.sort();

for (let osallistuja of osallistujat) {
  document.querySelector('#target').innerHTML += `<li>${osallistuja}</li>`;
}
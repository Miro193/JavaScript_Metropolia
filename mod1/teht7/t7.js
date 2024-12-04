'use strick';

const maara = prompt("Monta noppaa heitetään?")
let summa = 0;

for (let i = 1; i <= maara; i++) {
	const noppa = Math.floor(Math.random() * 6) + 1;
	summa = summa + parseInt(noppa);
	console.log(`kerrat ${i}, noppa ${noppa} ja summa ${summa}`);
}

document.querySelector('#target').innerHTML = `Noppien yhteissumma on: ${summa}`;
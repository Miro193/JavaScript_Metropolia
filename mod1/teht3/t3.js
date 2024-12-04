
'use strick';

let summa = 0;

for (let i = 1; i <= 3; i++) {
	const luku = prompt("Anna luku: ");
	summa += parseInt(luku);
}

document.querySelector('#target').innerHTML = summa;
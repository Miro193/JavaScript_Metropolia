'use strick';
// Write a program that prompts the user for the start and end year. 
// The program prints all leap years from the interval given by the user. 
// Printing is done in an unordered list to the HTML document. (3p)


const alkuVuosi = prompt("Anna alkamisvuosi:");
const loppuVuosi = prompt("Anna loppumismisvuosi:");

for (let i = alkuVuosi; i <= loppuVuosi; i++) {
	if ((i % 400 === 0) || (i % 100 != 0 && i % 4 === 0)) {
		const tulos = `<li>${i}</li>`;
		document.querySelector('#target').innerHTML += tulos;
		// console.log(tulos);
	}
}


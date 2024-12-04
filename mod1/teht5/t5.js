// Write a program that asks the user to enter a year and notifies
// the user whether the input year is a leap year.
// A year is a leap year if it is divisible by four.
// However, years divisible by 100 are leap years only if they
// are also divisible by 400. Print the result on the HTML document.
'use strick'

const vuosi = prompt("Anna vuosi: ");
let tulos;

if (vuosi % 400 === 0) {
	tulos = "Vuosi on karkausvuosi.";
}
else if (vuosi % 100 != 0 && vuosi % 4 === 0) {
	tulos = "Vuosi on karkausvuosi.";
}
else {
	tulos = "Vuosi ei ole karkausvuosi.";
}

document.querySelector('#target').innerHTML = tulos;

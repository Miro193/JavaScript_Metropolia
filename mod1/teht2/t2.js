'use strict';

const nimi = prompt("What is your name?");
const tervehtia = `Hello, ${nimi}.`;
document.querySelector('#target').innerHTML = tervehtia;
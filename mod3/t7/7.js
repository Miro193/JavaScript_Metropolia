'use strict';

const p = document.querySelector('#trigger');
const i = document.querySelector('#target');

p.addEventListener('mouseenter', () => { i.src = 'img/picB.jpg'; });
p.addEventListener('mouseout', () => { i.src = 'img/picA.jpg'; });
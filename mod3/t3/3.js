'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.querySelector('#target');

for (let item of names) {
  const li = document.createElement('li');
  li.innerHTML = item;
  ul.appendChild(li);
};

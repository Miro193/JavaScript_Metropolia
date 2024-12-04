// Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
// Add the following HTML code to the element with id="target"
// Add class my-item to the second list item

'use strict';

const items = ['First item', 'Second item', 'Trird item'];

const ul = document.querySelector('#target');

for (let item of items) {
  if (item === items[1]) {
    const li = document.createElement('li');
    li.className = 'my-item';
    li.innerText = item;
    ul.appendChild(li);
  }
  else {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  }
}

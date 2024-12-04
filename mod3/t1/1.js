// Open t1 folder in your IDE/editor. Add HTML by using innerHTML property (2p)
// Add the following HTML code to the element with id="target"
// Add class my-list to the element with id="target"

'use strict';

const items = ['First item', 'Second item', 'Trird item'];
for (let item of items) {
  document.querySelector('#target').innerHTML += `<li class="my-list">${item}</li>`;
}
'use strict';


document.addEventListener('submit', async function (evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const code = document.querySelector('input[name=q]').value;
    try {                                               // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        const div = document.querySelector("#results"); // the result to the div
        div.innerHTML = '';
        for (const tvShow of jsonData) {

            const article = document.createElement('article');
            article.className = 'card';
            div.appendChild(article);

            const h2 = document.createElement('h2');
            h2.innerText = tvShow['show']['name'];
            article.appendChild(h2);

            const a = document.createElement('a');
            a.innerText = tvShow['show']['url'];
            a.href = tvShow['show']['url'];
            a.target = '_blank';
            article.appendChild(a);

            const figure = document.createElement('figure');
            article.appendChild(figure);

            const i = document.createElement('img');
            i.src = tvShow['show']['image'] ? tvShow['show']['image']['medium'] : 'https://via.placeholder.com/210x295?text=Not%20Found';
            i.alt = tvShow['show']['name'];
            figure.appendChild(i);
        };
    } catch (error) {
        console.log(error.message);
    }
});

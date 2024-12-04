'use strict';

const apiForm = document.querySelector('form');
apiForm.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  const code = document.querySelector('#query').value;
  try {                                               // error handling: try/catch/finally
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
    console.log(jsonData.ICAO, jsonData.Name);    // log the result to the console
  } catch (error) {
    console.log(error.message);
  }
});
// Import stylesheets
import './style.css';
/*fetch function here return promise-which is this fetch function here returning a promise.
And then we handled that promise
using the then method, right.
But then to actually read the data from the response,
we need to call the json method on that response object.
Now this itself will also return a promise.
And so if we then return that promise from this method
then basically all of this becomes a new promise itself.*/
/*
The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON 
*/

function getCountry(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((result) => result.json(),error=>alert(error))
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].region);
      console.log('Border ', data[0].borders[0]);
      console.log('Population ', data[0].population / 10000000 + ' Crore');
      const neighber = data[0].borders[0];
      if (!neighber) return;
      return fetch(`https://restcountries.com/v3.1/name/${neighber}`);

    })
    .then((response) => response.json(),error=>alert(error))
    .then((data) => {
      console.log(data[0].region);
      console.log('Border ', data[0].borders[0]);
      console.log('Population ', data[0].population / 10000000 + ' Crore');
    });
}

getCountry('Pakistan');

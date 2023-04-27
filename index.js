// Import stylesheets
import './style.css';

// Write Javascript code!
//promise holds the eventual result on an async operation

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //  resolve(1);
    reject(new Error('Error mesg'));
  }, 2000);
});

p.then((result) => console.log('Result', result)).catch((err) =>
  console.log('Error->', err.message)
);

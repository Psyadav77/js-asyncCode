// Import stylesheets
import './style.css';

// Write Javascript code!
//promise holds the eventual result on an async operation

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     //  resolve(1);
//     reject(new Error('Error mesg'));
//   }, 2000);
// });

// p.then((result) => console.log('Result', result)).catch((err) =>
//   console.log('Error->', err.message)
// );

console.log('Before');
// getUser(1, function callback(user) {
//   //console.log(user);
//   getRepo(user.userName, (repo) => {
//     console.log(repo);

//   });
// });

//counsuming Promise

// const P = getUser(1);
// P.then((user) => console.log(user));
// P.then((getRepo) => console.log(getRepo));

getUser(1)
  .then((user) => getRepo(user.userName))
  .then((getRepo) => console.log(getRepo))
  .catch((err) => console.log(err.message));

//get the Repositories

console.log('After');
//replace with promise
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data Rread From DataBase');
      resolve({ id: id, userName: 'Prabhat' });
    }, 2000);
  });
}

function getRepo(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

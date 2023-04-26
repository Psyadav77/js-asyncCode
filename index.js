// Import stylesheets
import './style.css';

// Write Javascript code!
//callback is a function that when we are going to call when the result async operation is ready
//A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed.

console.log('Before');
getUser(1, function callback(user) {
  //console.log(user);
  getRepo(user.userName, (repo) => {
    console.log(repo);
  });
});
//get the Repositories

console.log('After');

function getUser(id, callBack) {
  setTimeout(() => {
    console.log('Data Rread From DataBase');
    callBack({ id: id, userName: 'Prabhat' });
  }, 2000);
}

function getRepo(userName, callback) {
  setTimeout(() => {
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}

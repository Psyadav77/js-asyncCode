// Import stylesheets
import './style.css';

// Write Javascript code!
//callback is a function that when we are going to call when the result async operation is ready

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

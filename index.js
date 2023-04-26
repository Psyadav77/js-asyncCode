// Import stylesheets
import './style.css';

// Write Javascript code!
//callback is a function that when we are going to call when the result async operation is ready

console.log('Before');
  getUser(1,function callback(user){
    console.log(user);
  })
console.log("After");


function getUser(id,callBack)
{
  setTimeout(()=>{
    console.log('Data Rread From DataBase');
    callBack({id:id,userName:'Prabhat'});
  },2000)
}

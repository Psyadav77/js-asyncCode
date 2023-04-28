//sometime you run few promises parallel when all task complete you want to do something -call diffrent api at same time--flipkart,amazon

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Run First api........');
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Run Secend api........');
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]).then((result) => console.log(result));

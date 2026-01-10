// // import hisob from "./hisob.js"
// const moment = require("moment");

// const time = moment().format();
// console.log(time);



// const calculate = require("./hisob.js");

// const value = calculate.bolish(5,5);
// const value1 = calculate.kopaytirish(5,5);
// const value2 = calculate.qoshish(5,5);
// const value3 = calculate.ayirish(5,5);
// console.log(value);
// console.log(value1);
// console.log(value2);
// console.log(value3);





const account = require("./account");

const myAccount = new account("Alimardon", 5000, 123456789);

myAccount.deposit(1000);
myAccount.details();
myAccount.withdraw(100);
console.log(myAccount.name);
myAccount.tellMeBalance();
account.tellMeAboutClass();
account.tellMeTime();

myAccount.withdraw(10000);







'use strict';


// let date = new Date();
// console.log("TCL: date", date)

// function createNewUser() {
//   let user = {
//     firstName: prompt("Enter firstName:"),
//     secondName: prompt("Enter secondtName:"),
//     birthday: prompt("Enter your birthday(dd.mm.yyyy):"),

//     getAge: function (age) {
//       return date.getFullYear();
//     },
//     getPassword: function () {

//     }
//   }
// }
// createNewUser();
// createNewUser.getAge();

let date = new Date();
let birthday = new Date();


birthday.setFullYear(1997, 2, 21);
console.log("TCL: birthday", birthday)
console.log(date.getFullYear() - birthday);
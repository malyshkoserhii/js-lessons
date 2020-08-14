"use strict";

// Як метод об'єкта. В контексті об'єкта.

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this: ", this);
//     console.log("this.tag: ", this.tag);
//   },
// };

// user.showTag();

//  Виклик без контекста

// const foo = function() {
//     console.log('this: ', this);
// }

// foo();

// Як метод об'єкта, но оголошена як зовнішня функція. В контексті об'єкта.

// const showTag = function() {
//     console.log("this: ", this);
//     console.log("this.tag: ", this.tag);
// };
// // showTag();

// const user = {
//     tag: 'Mango',
// };

// user.showTag = showTag;
// console.log(user);
// user.showTag();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this: ", this);
//     console.log("this.tag: ", this.tag);
//   },
// };

// user.showTag();

// Контекст в callback функціях

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this: ", this);
//     console.log("this.tag: ", this.tag);
//   },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();  
// }

// invokeAction(user.showTag);

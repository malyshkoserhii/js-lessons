"use strict";

// Присвоєння значення, індексація, переприсвоєння і довжина

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// console.log(friends[2]);

// friends[2] = 'Chelsy';
// console.log(friends);
// console.log(friends[2]);

// console.log(friends.length);

// friends[4] = 'Kongo';
// console.log(friends);
// console.log(friends.length);

// Ітерація по масиву

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i +=1) {
//     console.log(i);
//     console.log(friends[i]);
// }

// for(const friend of friends){
//     console.log(friend);
// }

// Логіка break та continue

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
const nameToFind = "Poly";
let  message = 'Немає у списку друзів';

// for (let i = 0; i < friends.length; i += 1) {
//   const friend = friends[i];

//   if (nameToFind === friend) {
//     console.log("Знайшли такого друга");
//   }
// }

// for (const friend of friends) {
//   if (nameToFind === friend) {
//     message = "Знайшли такого друга";
//     break;
//   } 
// } 

// else - можна видалити, тому що він не обов'язковий

// console.log(message);


// REFERENCE

// let a = 5;
// let b = a;

// console.log('a', a);
// console.log('b', b);

// a = 10;

// console.log('a', a);
// console.log('b', b);

// const a =[1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 10;

// console.log('a', a);
// console.log('b', b);

// b[1] = 20;

// console.log('a', a);
// console.log('b', b);


// ці масиви рівні, бо мають однакові місце в операт. пам'яті компа

// const a =[1, 2, 3];
// const b = a;
// console.log(a, b);

// console.log('a === b' , a === b); 


// ці масиви не рівні, бо мають різне місце в операт. пам'яті компа

// const c =[1, 2, 3];
// const d =[1, 2, 3];
// console.log(c, d);

// console.log(' c === d', c === d); 

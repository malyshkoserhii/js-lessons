"use strict";

// Includes
// Перевіряємо працівника на робочому місці
// Спочатку через for потім через includes

const staff = ["Mango", "Poly", "Ajax", "Kiwi"];
const query = "Ajax";
// let result = "Співробітник відсутній";

// for (const employee of staff) {
//   console.log(employee);

//   if (query === employee) {
//     result = "Співробітник на роботі";
//     break;
//   }
// }

// console.log(result);

// console.log(staff.includes('Poly')); // true

const result = staff.includes(query)
  ? "Співробітник на роботі"
  : "Співробітник відсутній";
  
console.log(result);

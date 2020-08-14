"use strict";

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const numbers = [1, 2, 3, 4, 5];

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(friends);
// logItems(numbers);

// Функція для пошуку друзів

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const nameTofind = "Poly";

// const findFriend = function (allFriends, name) {
//   console.log(allFriends);
//   console.log(name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       return "Найшли такого друга";
//     }
//   }

//   return 'Нема такого друга';
// };

// const r1  = findFriend(friends, "Poly");
// console.log(r1);
// const r2 = findFriend(friends, "Chelsy");
// console.log(r2);

// Функція пошуку друга через includes

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
const nameTofind = "Poly";

const findFriend = function (allFriends, name) {
  const isInFriends = allFriends.includes(name);

  // if (isInFriends) {
  //   return "Є у списку друзів";
  // } else {
  //   return "Немає у списку друзів";
  // }
  
  return isInFriends ? "Є у списку друзів" : "Немає у списку друзів";
};

const r1 = findFriend(friends, "Poly");
console.log(r1);
const r2 = findFriend(friends, "Chelsy");
console.log(r2);

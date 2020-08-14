// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

console.table(friends);

// const nameToFind = "Poly";

// for (const friend of friends) {
//     console.log(friend); // На кожній ітерації ми отримуємо доступ до об'єкта. Friend це посилання на кожний об'єкт.

//     if(friend.name === 'Poly') {
//         console.log('Знйшли Poly!!!');
//         break;
//     }
// }

/*
 * Шукаємо друга за іменем
 */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

const findFriendByName = function (allFriends, name) {
  for (const friend of friends) {
    console.log(friend);

    if (friend.name === name) {
      return "Найшли!";
    }
  }

  return "Не знайшли";
};

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/*
 * Отримуємо імена всіх друзів
 */

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    // console.log(friend);
    names.push(friend.name);
  }
  return names;
};

// console.log(getAllNames(friends));

/*
 * Отримуємо імена тільки друзів, котрі онлайн
 */

const getOnlineFriends = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend);

    if (friend.online) {
      names.push(friend.name);
    }
  }

  return names;
};

console.log(getOnlineFriends(friends));

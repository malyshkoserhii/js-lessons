/*
 * Array.prototype.sort()
 * Сортує та змінює оригінальний масив
 */

const numbers = [1, 9, 6, 2, 3];
numbers.sort(function (prev, next) {
  return prev - next;
});
// console.log(numbers);

//  Сорутємо масив не змінюю чи оргигінал

// const copy = numbers.slice().sort(); // 1-й варіант за допомогою методу slice
const copy = [...numbers].sort(); // 2-й варіант за допомогою методу slice
// console.log(numbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const sortedByTopPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
  // сортуємо гравців по зростанню вастивостей
  return prevPlayer.timePlayed - nextPlayer.timePlayed;
});

// console.table(sortedByTopPlayers);

const sortedByLowPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
  // сортуємо гравців по зменшенню властивостей
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});

// console.table(sortedByLowPlayers);

const sortedByTopPoints = [...players].sort(function (prevPlayer, nextPlayer) {
  // сортуємо гравців по зменшенню властивостей
  return nextPlayer.points - prevPlayer.points;
});

// console.table(sortedByTopPoints);

const sortedByLowPoints = [...players].sort(function (prevPlayer, nextPlayer) {
  // сортуємо гравців по зменшенню властивостей
  return prevPlayer.points - nextPlayer.points;
});

// console.table(sortedByTopPoints);

// console.table(sortedByLowPoints);



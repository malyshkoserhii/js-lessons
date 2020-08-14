/*
 * Array.prototype.reduce()
 * Поелементно перебирає оригінальний масив
 * Повертає що завгодно
 * Можна замінити все на світі, використовувати потрібно з рощумом
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce(function (accumulator, number, index, array) {
  // console.log("accumulator: ", accumulator);
  // console.log("element: ", number);
  // console.log("index: ", index);
  // console.log("array", array);
  return accumulator + number;
}, 0);

// console.log(total);

const players = [
  {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
  {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
  {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
  {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
  {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
];

const totalTimePlayed = players.reduce(function(time, player){
  return time + player.timePlayed;
}, 0);

// console.log(totalTimePlayed);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce(function(tags, tweet){
  tags.push(...tweet.tags);

  return tags;
}, []);

console.log(allTags);

// const tagStats = allTags.reduce(function(acc, tag){
  // console.log('TAG', tag);
  // console.log('ACC', acc);

  // if(acc.hasOwnProperty(tag)) {
  //   console.log(`Така властивість вже присутня, збільшуємо значення`);

  //   acc[tag] += 1;

  //   return acc;
  // }

  // console.log(`Такої властивості немає, додаємо на об'єкт`);
  // acc[tag] = 1;

  // Брудна версіяб котра мутує аргументб який прийде в acc
  // acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] +1 : 1;
  // console.log(acc[tag]);
  // return acc;
// }, {});

// Чиста верісія, кожен раз створює новий об'єкт
const tagStats = allTags.reduce(function(acc, tag){
  return {
    ...acc, 
    [tag]: acc.hasOwnProperty(tag) ? acc[tag] +1 : 1,
  };
}, {});


console.log(tagStats);

/*
 * Reduce своїми руками
 */

 Array.prototype.reduce = function(callback, initialValue = this[0]){
   let accumulator = initialValue;

   for(let i = 0; i < this.length; i += 1) {
     accumulator = callback(accumulator, this[i], i, this);
   }

   return accumulator;
 };



"use strict";

// Split and join

// const title = 'Top 10 benefits of react framework';
// console.log(title.split(' '));

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers.join('. '));

// const title = "Top 10 benefits of react framework";
// const normalizedTitle = title.toLocaleLowerCase();

// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// Чейнінг - не дуже вдалий код в даному випадку, оскільки
// надто коротки і може бути не відразу зрозуміло що відбувається. Саме крще це золота середина (див. нижче)
// const title = "Top 10 benefits of react framework";
// const slug = title.toLocaleLowerCase().split(" ").join("-");
// console.log(slug);

// "Золота середина декларативності"
// const title = "Top 10 benefits of react framework";
// const words = title.toLocaleLowerCase().split(' ');
// const slug = words.join('-');
// console.log(slug);

// Все те саме тільтки зробимо циклом, для того щоб лише потренуватися
const title = "Top 10 benefits of react framework";
const words = title.toLocaleLowerCase().split(" ");
let slug = "";

for (let i = 0; i < words.length; i += 1) {
  console.log(words[i]);
  if (i !== words.length - 1) {
    slug += words[i] + "-";
  } else {
    slug += words[i];
  }
}

console.log(slug);

"use strict";

// Slice-splice

// Працюємо із колекцією карточок в трелло
// Видалити, додати, обновити

const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
console.log(cards);

// Slice
// Видалення
// const cardToRemove = "card-3";

// const index = cards.indexOf(cardToRemove);

// cards.splice(index, 3);
// console.log(cards);

// Splice
// Вставка
// const cardToInsert = 'card-10';
// const indexInsert = 3;

// cards.splice(indexInsert, 0, cardToInsert);
// console.log(cards);

// Оновлення (заміна)

cards.splice(2, 2, 'cards-3-modded', 'cards-4-modded');
console.log(cards);

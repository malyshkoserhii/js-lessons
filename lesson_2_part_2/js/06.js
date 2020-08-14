"use strict";

// Псевдомасив Arguments та Array.from

// const fn = function () {
//     console.log([]);
//     console.log(arguments);
// }

// fn(1, 2, 3, 4, 5, 6, 7);

// 1. Варіант через Array.from для того щоб перетворити псевдомасив у масив
// const add = function () {
//     const args = Array.from(arguments);
//     console.log(arguments);
//     console.log(args);
// };

// console.log(add (1, 2, 3));
// console.log(add (4, 5, 6));

// 2. Варіант через операцію rest (або збір) - більш новий та сучанисний
// const add = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };




// Функція прикріплення тегу до рядка

const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
const tag = '#jqueryrules';

// const postsWithTag = [];

// for (const post of posts) {
//     postsWithTag.push(`${post}${tag}`);

//     console.log(postsWithTag);
// }

const addTag = function(tag, ...args) {
    const postsWithTag = [];
    for (const arg of args) {
        postsWithTag.push(`${arg}${tag}`);
    }

    return postsWithTag
}

console.log(addTag('#jqueryrules', 'post-1', 'post-2'));
console.log(addTag('#reast', 'post-1', 'post-2', 'post-3'));
console.log(addTag('#redux', 'post-1', 'post-2', 'post-3', 'post-4'));
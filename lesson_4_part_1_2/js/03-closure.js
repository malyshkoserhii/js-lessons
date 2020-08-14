/*
 * Створюємо повара з іменем та без
 */

// const foo = function() {
//     const x = 5;

//     return function() {
//         console.log(x);
//     };
// };

// const outerFn = foo();

// outerFn();

// Карирование

const makeSheff = function (name) {
  return function (dish) {
    console.log(`${name} готує ${dish}`);
  };
};

const mango = makeSheff("Mango");
const poly = makeSheff("Poly");

mango("котлети");
poly("чай");

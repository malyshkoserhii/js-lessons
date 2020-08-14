/*
 * Прототип
 * Object.create()
 * [[Prototype]] __proto__
 * Ланцюг прототипів
 */

// const objA = {
//     x: 1,
//     y: 2,
// };

const objB = {
    z: 10,
    // x: 1000,
};

const objA = Object.create(objB);

objA.x = 1;
objA.y = 2;

console.log(objA);


/*
 * Правила пошуку властивості в ланцюгу прототипів
 */

console.log(objA.qwe );



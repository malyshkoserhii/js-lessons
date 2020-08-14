"use strict";

// Функція пошуку найменшого числа в масиві

const numbers = [67, -3, 25, 78, 90, 2];

const findSmallestNumber = function(items) {
  let smallestNumber = items[0];
  for (let i = 1; i < items.length; i += 1) {
    if (items[i] < smallestNumber) {
      smallestNumber = items[i];
    }
  }

  return smallestNumber;
};

const r1 = findSmallestNumber(numbers);
console.log(r1);

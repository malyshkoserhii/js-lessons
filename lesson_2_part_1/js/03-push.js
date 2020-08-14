'use strict'

// const numbers = [1, 2, 3];

// numbers.push(4, 5, 6);

// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// Shift and unshift

// const numbers = [1, 2, 3];

// numbers.shift();

// numbers.unshift(4, 5, 6);

// console.log(numbers);


const valueInputRef = document.querySelector('.js-value');
const addValueBtn = document.querySelector('.js-add-value');
const calcBtn = document.querySelector('.js-calculate');
const numbers = [];
let total = 0;

addValueBtn.addEventListener('click', function(){
    const value = Number(valueInputRef.value);
    numbers.push(value);
    valueInputRef.value = '';
    console.log(numbers);
});

calcBtn.addEventListener('click', function() {
    for(const number of numbers){
        console.log(number);
        total += number;
    }

    console.log('Total:', total);
});
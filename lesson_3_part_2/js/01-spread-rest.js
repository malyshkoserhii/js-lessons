// Розпорошення масивів

const temperatures = [18, 14, 12, 21, 17, 29];

const min = Math.min(temperatures); // NaN

// console.log(min);

console.log(Math.min(...[18, 14, 12, 21, 17, 29]));

// const nextTemps = temperatures.concat(1, 2, 3);

const nextTemps = [...temperatures, 1, 2, 3, 4, 5];

// console.log(nextTemps);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [6, 1, 8];
const nextWeekTemps = [12, 14, 8];

// const temps = lastWeekTemps.concat(currentTemps, nextWeekTemps);

const temps = [...lastWeekTemps, ...currentTemps, "hello", ...nextWeekTemps];
console.log(temps);

// Розпорошення об'єктів

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

const c = { ...a, ...b };
console.log(c);

// Операція rest або збір

const fn = function (...args) {};

fn(1, 2, 3, 4, 5, 6);

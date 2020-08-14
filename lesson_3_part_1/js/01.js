// Літерал об'єкта, властивості, ключі, значення.

// const hotel = { name: "Sunset Resort", 
// stars: 5, 
// capacity: 200
// };

// Доступ до рядка obj.key та obj['key']

// console.log(hotel.name);
// console.log(hotel['name']);
// console.log(hotel.amount);


// hotel.stars = 3;
// console.log(hotel.stars);

// hotel.guests = [];
// console.log(hotel.guests);


// Об'єкт це ссилочний тип, так само як і масив

// Масиви та функції це об'єкти

// Методи об'єкта і this при зверненні до властивостей в методах

// const hotel = { name: "Sunset Resort", 
// stars: 5, 
// capacity: 200,
// uptadeName: function(newName) {
// console.log('this', this);

//     this.name = newName;

//     this.someMethod();
// },

// someMethod() {
//     console.log('Hello from some method');
// },

// };

// hotel.uptadeName('Lagoon');
// console.log(hotel);


// Перебір через for...in та Object.keys|values|enteries


const feedback = {
    good:5,
    neutral: 10,
    bad: 3,
};

// let totalFeedback = 0;

// for (const key in feedback) {
//     console.log(key);
//     console.log(feedback[key]);
//     totalFeedback += feedback[key];
// }

// console.log('Total:', totalFeedback);

// const keys = Object.keys(feedback);

// console.log(keys.length);

// let totalFeedback = 0;

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log('Total:', totalFeedback);

// let totalFeedback = 0;

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log('Total:', totalFeedback);


// const x = Object.entries(feedback);
// console.log(x);

// console.log(x[1][1]);
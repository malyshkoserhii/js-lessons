// Ветвление

// console.log('before');

// if(5 > 3) {
// console.log('inside'); //тіло. Якщо умова в круглих дужках правдива, тобто - true, то виконується тіло умови.
// }
// console.log('after');

// let balance = 100;
// let payment = 2000;

// console.log(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`);
// if (balance >= payment) {
//     balance = balance - payment;
//     console.log('Все добре! Списуємо кошти із вашого рахунку. Дякуємо Вам за покупку!');
//     console.log(`На вашому рахунку залишилося ${balance} кредитів`);
// } else {
//     console.log('На Вашому рахунку недостатньо коштів для здійснення платежу');
// }

// console.log('Операція завершена');

// if... else if, та знижка

const totalExpenses = 2000;
const payment = 500;
let discount = 0;

if (totalExpenses >= 100 && totalExpenses < 1000) {
  discount = 0.02;
  console.log("Бронзовий партнер, знижка 2%");
} else if (totalExpenses >= 1000 && totalExpenses < 5000) {
  discount = 0.05;
  console.log("Срібний партнер, знижка 5%");
} else if (totalExpenses >= 5000) {
  discount = 0.1;
  console.log("Золотий партнер, знижка 10%");
} else {
  console.log("У Вас ще не має партнерської знижки");
}

const finalAmount = payment - payment * discount;
console.log(finalAmount);

console.log(
  `Оформляємо замовлення на суму ${finalAmount} із знижкою ${discount * 100}%`
);

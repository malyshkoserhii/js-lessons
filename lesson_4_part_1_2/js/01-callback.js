/*
 * Функція звортнього виклику (callback) і функція вищого порядку (hof)
 */

// const greet = function(name) {
//     console.log(`Hello ${name}`);
// }

// const greetWithName = function(callback) {
//     const name = 'Mango'
//     console.log(callback);
// }

// greetWithName(greet);

/*
 * Відкладений виклик: реєстрація подій
 */

 const buttonRef = document.querySelector('button');

 buttonRef.addEventListener('click', function() {
     console.log('Click');
 });


/*
 * Відкладений виклик: інтервали
 */

console.log('В коді перед таймаутом');

setTimeout(function() {
    console.log('Через 3 секунди всередині колбека в таймауті');
}, 3000);

console.log('В коді після таймауту');

/*
 * Відкладений виклик: http-запит
 */


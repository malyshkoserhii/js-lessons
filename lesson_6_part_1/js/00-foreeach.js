/* 
 * Array.prototype.forEach()
 * Поелементно перебирає оригінальний масив
 * Нічого не повертає
 * Замінює клсичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25]; 

numbers.forEach(function(element, index, array) {
     console.log(element);
    //  console.log(index);
    //  console.log(array);
});

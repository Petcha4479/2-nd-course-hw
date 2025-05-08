// // Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];
//
// // Допишите колбэк для sort,
// console.log(people.sort((a, b) => a.age - b.age));
//
//
// // Задание 2
// function isPositive(num) {
//     return num > 0;
// }
//
// function isMale(person) {
//     return person.gender === 'male';
// }
//
// function filter(array, ruleFunction) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (ruleFunction(array[i])) {  // если правило возвращает true, добавляем элемент
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
//
// console.log(filter([3, -4, 1, 9], isPositive));
//
// const people1 = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
// ];
//
// console.log(filter(people1, isMale));
//
//
// // Задание 3
// let newDate = new Date();
// let date = newDate.getFullYear() + "-" + newDate.getUTCMonth() + "-" + newDate.getDate();
// const intervalId = setInterval(() => {
//     console.log(date); // Выводим текущую дату
// }, 3000);
//
// // Через 30 секунд останавливаем интервал и выводим сообщение
// setTimeout(() => {
//     clearInterval(intervalId); // Останавливаем интервал
//     console.log('30 секунд прошло');
// }, 30000);
//
//
// // Задание 4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
//     callback();
// }
//
// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })
//
// // Задание 5
// // Функция delayForSecond через 1 секунду пишет в консоль
// // «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond1(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) { cb(); }
//     }, 1000)
// }
//
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }
//
// delayForSecond1(() => sayHi("Глеб"));
//
//
//

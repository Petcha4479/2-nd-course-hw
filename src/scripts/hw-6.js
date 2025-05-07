// Задание 1
const numbers1 = [1, 5, 4, 10, 0, 3];
for (const num of numbers1) {
    console.log(num);
    if (num === 10) break;
}

//Задание 2
const numbers2 = [1, 5, 4, 10, 0, 3];
const index = numbers2.indexOf(4);
console.log(`запутался в цифрах в console ${index}`);

// Задание 3
const numbers3 = [1, 3, 5, 10, 20];
console.log(numbers3.join(" "));

//Задание 4
const numbers4 = []; // Создаем пустой массив
// Внешний цикл
for (let i = 0; i < 3; i++) {
    const row = []; // Создаем новую строку

    // Внутренний цикл
    for (let j = 0; j < 3; j++) {
        row.push(1); // Добавляем 1 в строку
    }
    numbers4.push(row); // Добавляем строку в результат
}
console.log(numbers4);

//Задание 5
const numbers5 = [1, 1, 1 ];
numbers5.push(2, 2, 2);
console.log(numbers5);

//Задание 6
const numbers6 = [9, 8, 7, 'a', 6, 5];
const num = numbers6.filter(item => item !== 'a');
console.log(num);

//Задание 7
const array7 = [9, 8, 7, 6, 5];
const hiddenNumber = parseFloat(prompt("Угадай число от 0 до 9"));
if (isNaN(hiddenNumber) < 0 || hiddenNumber > 10) {
    alert("Повтори ввод");
} else if (array7.includes(hiddenNumber)) {
    alert("Угадал")
} else {
    alert("Не угадал")
}


// Задание 8
let line = 'abcdef';
const splitLine = line.split('');
splitLine.reverse();
console.log(splitLine);

// Задание 9
const array9 = [[1, 2, 3],[4, 5, 6]];
const newArray9 = [].concat(...array9);
console.log(newArray9);

// Задание 10
const array10 = [];
for (let i = 0; i < 5; i++) {
    array10.push(Math.floor(Math.random() * 10) + 1);
}
console.log(array10);
for (let i = 0; i < array10.length - 1; i++) {
    const current = array10[i];
    const next = array10[i + 1];
    const sum = current + next;
    console.log(`Сумма элементов ${next} и ${current}: = ${sum}`);
}

// Задание 11
function squareArray(numbers) {
     return numbers.map(num => num * num);
}
console.log(squareArray(array10));


// Задание 12
function getWordLengths(stringsArray) {
    return stringsArray.map(str => str.length);
}
console.log(getWordLengths(splitLine));


// Задание 13
function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

// Задание 14
// Генерируем массив из 10 случайных чисел от 0 до 10 (включительно)
const array14 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenValues = array14.filter(num => num % 2 === 0);
// Выводим оба массива в консоль
console.log("Исходный массив:", array14);
console.log("Массив с четными числами:", evenValues);


// Задание 15
// Генерируем массив из 6 случайных чисел от 1 до 10
const array15 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

// Вычисляем сумму всех элементов и делим на их количество
const average = array15.reduce((sum, num) => sum + num, 0) / array15.length;

// Выводим массив и среднее арифметическое
console.log("Сгенерированный массив:", array15);
console.log("Среднее арифметическое:", average);

let currentDate = new Date();
console.log(currentDate);

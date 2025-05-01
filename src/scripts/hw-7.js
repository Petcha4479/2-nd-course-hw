// Задание 1
let line = "js";
const lineUp = line.toUpperCase();
console.log(lineUp);


// Задание 2
function filterStringsByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return arr.filter(item =>
        item.toLowerCase().startsWith(lowerPrefix)
    );
}

//Задание 3
const num = 32.58884;
const roundedDown = Math.floor(num); // 32
console.log(roundedDown)

const roundedUp = Math.ceil(num); // 33
console.log(roundedUp);

const roundedNearest = Math.round(num);
console.log(roundedNearest)


//Задание 4
const array = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...array);
console.log(minValue);
const maxValue = Math.max(...array);
console.log(maxValue);

//Задание 5
let number = Math.round(Math.random() * 10);
console.log(number);

//Задание 6
function generateRandomArray(num) {
    const length = Math.floor(num / 2); // Длина массива = num / 2 (округление вниз)
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (num + 1)); // От 0 до num включительно
        randomArray.push(randomNumber);
    }

    return randomArray;
}
console.log(generateRandomArray(10));


// Задание 7
function getRandomInRange(min, max) {
    // Проверка на корректность ввода
    if (min > max) [min, max] = [max, min]; // Если min > max, меняем их местами

    // Генерация случайного числа в диапазоне [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(1, 10));


// Задание 8
let newDate = new Date();
let date = newDate.getFullYear() + "-" + newDate.getUTCMonth() + "-" + newDate.getDate();
console.log(date);


// Задание 9
let myDate = new Date();
myDate = +myDate; // + преобразует дату в миллисекунды

let days73 = 73 * 24 * 60 * 60 * 1000;
console.log(days73)

let searchDate = myDate + days73;
    console.log(searchDate);

// Дата через 73 дня
let daysAgo73 = new Date(searchDate);
console.log(daysAgo73);

// Задание 10
function formatRussianDate(date) {
    // названия месяцев
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    // названия дней недели
    const daysOfWeek = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    // Получаем компоненты даты
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    // Форматируем время с ведущими нулями
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Собираем результат
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

// Пример использования
const today = new Date();
console.log(formatRussianDate(today));
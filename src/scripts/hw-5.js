// Игра угадай число
function firstGame () {
    function guessNumberGame() {
        // Генерируем случайное число от 1 до 100
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let userGuess;

        alert('Я загадал число от 1 до 100. Попробуй угадать!');

        do {
            // Запрашиваем у пользователя число
            userGuess = prompt('Введите вашу догадку (число от 1 до 100):');

            // Проверяем, хочет ли пользователь выйти (нажал Cancel)
            if (userGuess === null) {
                alert(`Игра окончена. Загаданное число было: ${secretNumber}`);
                return;
            }

            // Преобразуем в число и проверяем валидность
            userGuess = Number(userGuess);

            if (isNaN(userGuess)) {
                alert('Пожалуйста, введите число!');
                continue;
            }

            if (userGuess < 1 || userGuess > 100) {
                alert('Число должно быть от 1 до 100!');
                continue;
            }

            attempts++;

            // Даем подсказки
            if (userGuess < secretNumber) {
                alert('Загаданное число больше!');
            } else if (userGuess > secretNumber) {
                alert('Загаданное число меньше!');
            }

        } while (userGuess !== secretNumber);

        // Поздравляем с победой
        alert(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
    }
    guessNumberGame();
}

// Задание 1
function min (a, b) {
    return a < b ? a : b;
}
console.log(min(8, 7));

// Задание 2
function checkNumber (num) {
    return (num % 2 === 0) ? 'Число четное' : 'Число нечетное';
}
console.log(checkNumber(10));

// Задание 3
const printSquare = number => console.log(`Выводит квадрат числа ${number ** 2}`);
printSquare(23);

function getSquare(number) {
    return number ** 2;
}
const result = getSquare(4);
console.log(`Возвращает квадрат числа ${result}`);

// Задание 4
function checkAge() {
    const age = parseInt(prompt("Сколько вам лет?"));

    if (isNaN(age) || age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}
checkAge();

// Задание 5
function twoNumbers (c, d) {
    if (isNaN(Number(c)) || isNaN(Number(d))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return Number(c) * Number(d);
    }
}
console.log(`Произведение чисел ${twoNumbers(6, 5)}`);

//Задание 6
function calculateCube() {
    const userInput = prompt('Введите число:');
    const number = Number(userInput);
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        // Если число корректное, вычисляем куб и возвращаем результат
        const cube = number ** 3;
        return `${number} в кубе равняется ${cube}`;
    }
}
console.log(calculateCube());

//Задание 7
const circle1 = {
    radius: 5,

    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,

    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};
console.log( circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
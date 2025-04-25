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

// Игра Простая арифметика
function secondGame () {
    function generateMathProblem() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let num1, num2, answer;

        if (operation === '+') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 + num2;
        } else if (operation === '-') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 - num2;
        } else if (operation === '*') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 5) + 1;
            answer = num1 * num2;
        } else if (operation === '/') {
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * answer;
        }

        return {
            question: `Сколько будет ${num1} ${operation} ${num2}?`,
            correctAnswer: answer
        };
    }

    function startMathQuiz() {
        const problem = generateMathProblem();
        const userAnswer = parseFloat(prompt(problem.question + "\n(Введите ваш ответ)"));

        if (isNaN(userAnswer)) {
            alert("Пожалуйста, введите число!");
        } else if (Math.abs(userAnswer - problem.correctAnswer) < 0.0001) {
            alert("Правильно! 👍");
        } else {
            alert(`Неправильно. Правильный ответ: ${problem.correctAnswer}`);
        }

        if (confirm("Хотите решить еще одну задачу?")) {
            startMathQuiz();
        } else {
            alert("Спасибо за игру!");
        }
    }

// поехали!!!
    startMathQuiz();
}
// Задание 1
let titleEl = document.querySelector('.title');
const buttonEl = document.querySelector('.btn');
// const buttonEl = document.getElementsByClassName('.btn');

buttonEl.addEventListener('click', function () {
    if (titleEl.style.display === 'none') {
        titleEl.style.display = 'block';
        buttonEl.textContent = 'Скрыть';
    } else {
        titleEl.style.display = 'none';
        buttonEl.textContent = 'Показать';
    }
});


// Задание 2
let textEl = document.querySelector('.text');

const buttonColorEl = document.getElementById('change-color');

buttonColorEl.addEventListener('click', function () {
    textEl.style.color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
})

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

//Задание 3
const buttonChangeText = document.getElementById('change-text');
buttonChangeText.addEventListener('click', function () {
    titleEl.textContent = 'Привет, мир!';
})

//Задание 4
const allDescriptions = document.querySelectorAll(`.description`);
allDescriptions.forEach(description => {
    description.textContent = 'Измененный текст.';
});

//Задание 5
 setInterval(() => {
    allDescriptions.forEach(description => {
        description.textContent = 'Новый текст.';
    });
}, 3000);

// Задание 6
const newEl = document.getElementById('newItem');

newEl.addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Новый абзац';
    document.body.appendChild(newElement);
});

// Задание 7
const deleteEl = document.getElementById('remove-tem');

deleteEl.addEventListener('click', function() {
const removeEl = document.querySelector(`.description`);
removeEl.remove();
})

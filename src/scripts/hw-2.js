let a = 10;
alert(a);
a = 20;
alert(a);

let year = 2005;
alert(`Год выпуска первого iPhone ${year}`);

let name = 'Eich';
alert(name);

let numberOne = 10;
let numberTwo = 2;
alert(`Сумма: ${numberOne + numberTwo}\nРазность: ${numberOne - numberTwo}\nПроизведение: ${numberOne * numberTwo}\nЧастное: ${numberOne / numberTwo}`);

let result = 2 ** 5;
alert(result);

let one = 9;
let two = 2;
let remainder = one % two;
alert(remainder);


let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = prompt("Сколько вам лет?");
alert(`Вам: ${age} лет`);

const user = {
    name: 'Лёха',
    age: 30,
    isAdmin: false
}

let nameUser = prompt("Введите ваше имя");
alert(`Привет ${nameUser}`);
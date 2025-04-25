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
const size = 3;
const numbers4 = new Array(size)
    .fill(1)
    .map(() => new Array(size).fill(1)); // заменяем на массивы из единиц

console.log(numbers4);
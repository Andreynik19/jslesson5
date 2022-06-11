//1

// let text = prompt('Write text', 'Mozart');

// function isMozartHere(str) {
//     if (str.trim().includes('Mozart')) {
//         return true
//     } else {
//         return false;
//     };
// };

// let result = isMozartHere(text);

// console.log(text);
// console.log(result);


//2

// function showUppercaseFirstLetter(str) {
//     return str[0].toUpperCase() + str.slice(1);
// };

// let result = showUppercaseFirstLetter('show')
// console.log(result);

//3

// let books = ['Война и мир', "Анна Каренина", "Детство", "Воскресение"]

// console.log(`Последний элемент`, books[books.length - 1]);
// console.log(`Предпоследний элемент`, books[books.length - 2]);
// console.log(`Длина массива`, books.length);

//4

// let JavaScriptTypes = ['number', 'nul', 'undefined', 'string'];
// JavaScriptTypes.push('simbol', 'boolean', 'obgect');

// console.log(JavaScriptTypes);

//5

// let str = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии."

// console.log(str.indexOf('«451 градус по Фаренгейту»'));
// console.log(str.indexOf(' Рэя'));
// console.log(str.slice(123, 149));

//6

// console.log(Math.ceil(Math.random() * 100));

//7

// let str = "Я учу JavaScript очень мало";
// console.log(str.replace("мало", "много"));

// 8)

// function text(a, b) {
//     let str = "Дорогой, а вдруг он потеряется?";
//     if (str.includes(a) && str.includes(b)) {
//         console.log('Включает')
//     } else {
//         console.log('Не включает')
//     };
// };

// text("вдруг", "рассвет");

//9

let colors = ["red", "blak", "blue", "yellow"];
console.log(colors);

colors.pop();
console.log(colors);

colors.push('white');
console.log(colors);

colors.shift();
console.log(colors);

colors.unshift('white');
console.log(colors);
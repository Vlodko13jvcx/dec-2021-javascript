// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
console.log(Math.floor(Math.random()*100));
let array = [81, 5, 67, 2, 56, 6, 1, 29, 0, 68];
let result = array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6]+array[7]+array[8]+array[9];
console.log("result = " + result );

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    title: 'Javascript for children',
    numberOfPages: 369,
    category: 'Cognitive books',
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
book['authors']= 'Morgan Nick';

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let javascriptForChildren = {
    title: 'JavaScript для дітей. Веселий вступ до програмування',
    numberOfPages: 369,
    category: 'Cognitive books',
    authors: 'Morgan Nick'
}
let pytonForChildren = {
    title: 'PYTHON для дітей. Веселий вступ до програмування',
    numberOfPages: 400,
    category: 'Cognitive books',
    authors: 'Jason R. Briggs'
}
let scratchForChildren = {
    title: 'Scratch для дітей. Веселий вступ до програмування',
    numberOfPages: 384,
    category: 'Cognitive books',
    authors: 'Majed Margie'
}
book = [javascriptForChildren, pytonForChildren, scratchForChildren];
console.log(book);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let pi = 3.1415;
let v = pi * (dC/2)**2 * heightC;
console.log(v);
console.log(Math.round(v));

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
// або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(n**2 + m**2);
console.log(k);
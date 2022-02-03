// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false.  Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;
console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);
alert(a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g + ' ' + h + ' ' + i + ' ' + j + ' ' + k + ' ' + l + ' ' + m);
document.write(a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g + ' ' + h + ' ' + i + ' ' + j + ' ' + k + ' ' + l + ' ' + m + '</br>');


// - Переприсвоїти кожній змінній з завдання значення на довільне. Вивести кожну змінну
// за допомогою: console.log , alert, document.write
a = 'hellowin';
b = 'word';
c = 'comin';
d = 'uaA';
e = 152;
f = 1066;
g = -9;
h = 143;
i = 0.14;
j = 27;
k = 167;
l = "qwerty";
m = "cfgjhb";
console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);
alert(a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g + ' ' + h + ' ' + i + ' ' + j + ' ' + k + ' ' + l + ' ' + m);
document.write(a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g + ' ' + h + ' ' + i + ' ' + j + ' ' + k + ' ' + l + ' ' + m + '</br>');


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = "Volodymyr";
let middleName = "Yaroslavovych";
let lastName = "Vorok";
let person = firstName + " " + middleName + " " + lastName;
console.log(person);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
firstName = prompt("Enter your firstname");
middleName = prompt("Enter your middlename");
let age = prompt("Enter your age");
console.log("Вітаю " + firstName + " " + middleName +". Тобі " + age + " років.");


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
a = 100;
b = '100';
c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6); // 5 ? 6 -> true
console.log(5 > 6); // 5 ? 6 -> false
console.log(5 == 6); // 5 ? 6 -> false
console.log(5 >= 6); // 5 ? 6 -> false
console.log(10 == 10); // 10 ? 10 -> true
console.log(10 === 10); // 10 ? 10 -> true
console.log(10 < 10); // 10 ? 10 -> false
console.log(10 > 10);// 10 ? 10 -> false
console.log(10 !== 10);// 10 ? 10 -> false
console.log(123 ==='123'); // 123 ? '123' -> false
console.log(123 == '123'); // 123 ? '123' -> true


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
a = 5;
document.write("Шо тут думати, я розкоментую і подивлюсь що вийде )). Практика найкраще навчання!" + "<br/>");
document.write(str + a + "<br/>");   // "205" якщо до стрічки до даємо число отримаємо стрічку в решті числа
document.write(str - a + "<br/>");   // 15    число
document.write(str * "2" + "<br/>"); // 40    число
document.write(str / 2 + "<br/>");   // 10    число
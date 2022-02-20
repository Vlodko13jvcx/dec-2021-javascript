// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let txt1 = 'hello world';
console.log(txt1.length + ' - символів довжина ' + txt1);
let txt2 = 'lorem ipsum';
console.log(txt2.length + ' - символів довжина ' + txt2);
let txt3 = 'javascript is cool';
console.log(txt3.length + ' - символів довжина ' + txt3);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let txt1UpCase = txt1.toUpperCase();
console.log(txt1UpCase);
let txt2UpCase = txt2.toUpperCase();
console.log(txt2UpCase);
let txt3UpCase = txt3.toUpperCase();
console.log(txt3UpCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let txt1LoCase = txt1UpCase.toLowerCase();
console.log(txt1LoCase);
let txt2LoCase = txt2UpCase.toLowerCase();
console.log(txt2LoCase);
let txt3LoCase = txt3UpCase.toLowerCase();
console.log(txt3LoCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
let clearStr = dirtyStr.trim();
console.log(clearStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str = 'Каждый охотник желает знать';
let stringToarray = (txt) => txt.split(' ');
console.log(stringToarray(str));
document.write(`<p>${stringToarray(str)}</p>`);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
let deleteCharacters = (txt, length) => txt.substr(0, length);
console.log(deleteCharacters(str, 7));
document.write(`<h4>${deleteCharacters(str, 7)}</h4>`);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент
// і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let someStr = "HTML JavaScript PHP";
let insertDash = (txt) => txt.replaceAll(' ', '-');
console.log(insertDash(someStr.toUpperCase()));
document.write(`<p>${insertDash(someStr.toUpperCase())}</p>`);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.
let firstCharacterUpCase = (txt) => txt[0].toUpperCase() + txt.slice(1);
console.log(firstCharacterUpCase(txt1));
document.write(`<p>${firstCharacterUpCase(txt1)}</p>`);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (txt) => txt.split(' ').map(txt => txt.charAt(0).toUpperCase() + txt.slice(1)).join(' ');
console.log(capitalize(txt3)+'  '+capitalize('okten hi you are welcome'));
document.write(`<h4>${capitalize(txt3)} - ${capitalize('okten hi you are welcome')}</h4>`);
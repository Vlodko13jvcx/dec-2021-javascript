// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let a = +prompt('Давайте обчислимо площу прямокутника. Введіть значення першої сторони');
let b = +prompt('Введіть значення другої сторони');
function areaRectangle(a, b) {
    return a * b;
}
console.log(areaRectangle(a, b) + ' - площа прямокутника');
document.write(areaRectangle(a, b) + ' - площа прямокутника' + '<br>');

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let r = +prompt('Давайте обчислимо площу кола. Введіть значення радіуса');
const PI = 3.1415;
function areaRound(w) {
    return Math.round(PI * Math.pow(w,2));
}
console.log(areaRound(r) + ' - площа кола');
document.write(areaRound(r) + ' - площа кола' + '<br>');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let rcd = +prompt('Давайте обчислимо площу циліндра. Введіть значення радіуса циліндра');
let hcd = +prompt('Введіть значення висоти циліндра');
function areaCylinder(r, h) {
    let sCylSide = 2 * PI * r * h; // площа бічної поверхні
    let sCylBase = 2 * PI * Math.pow(r, 2); // площа 2-х основ
    return sCylBase + sCylSide;
}
console.log(areaCylinder(rcd, hcd) + ' - площа циліндра');
document.write(areaCylinder(rcd, hcd) + ' - площа циліндра' + '<br>');

// - створити функцію яка приймає масив та виводить кожен його елемент
let massiv = [10, 20, 30, 40, 50, "octen"];
function masOutput (mas) {
    for ( i = 0; i < mas.length; i++ ) {
        console.log(mas[i]);
        document.write(mas[i] + '<br>');
    }
}
masOutput(massiv);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let docTxt = prompt('Введіть будь-який текст');
function outDoc (txt) {
    document.write('<p>' + txt + '</p>');
}
outDoc(docTxt);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function txtLi(ххх) {
     document.write(`<ul>`);
     document.write(`<li>${ххх}</li>`);
     document.write(`<li>${ххх}</li>`);
     document.write(`<li>${ххх}</li>`);
     document.write(`</ul>`);
}
txtLi('Love is all you need');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function txtList(ххх, k) {
    for (i = 0; i < k; i++) {
        document.write(`<ul>`);
        document.write(`<li>${ххх}</li>`);
        document.write(`<li>${ххх}</li>`);
        document.write(`<li>${ххх}</li>`);
        document.write(`</ul>`);
    }
}
txtList('Love is all you need', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let massElemts = ['duck', 100, "BMW", true, 1500];
function buldLi(mx) {
    document.write(`<ul>`);
    for (i = 0; i < mx.length; i++) {
        document.write(`<li>${mx[i]}</li>`);
    }
    document.write(`</ul>`);
}
buldLi(massElemts);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ. Для кожного об'єкту окремий блок.
let myChild = [{id: 1, name: 'Marko', age: 13}, {id: 2, name: 'Marta', age: 11}, {id: 3, name: 'Solomia', age: 4}];
function arrObj(arrX) {
    for (const arrayElement of arrX) {
        document.write(`<div>${arrayElement.id}. ${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
arrObj(myChild);
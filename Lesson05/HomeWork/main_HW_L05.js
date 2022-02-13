// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
let areaRectangle = (a, b) => a * b;
console.log(areaRectangle(12, 10) + ' - площа прямокутника');
document.write(areaRectangle(12, 10) + ' - площа прямокутника' + '<br>');

// - створити функцію яка обчислює та повертає площу кола
let r = +prompt('Давайте обчислимо площу кола. Введіть значення радіуса');
const PI = 3.1415;
let areaRound = (radius) => Math.round(PI * Math.pow(radius, 2));
console.log(areaRound(r) + ' - площа кола');
document.write(`<h4>${areaRound(r)} - площа кола </h4>`);

// - створити функцію яка обчислює та повертає площу циліндру
let rcd = +prompt('Давайте обчислимо площу циліндра. Введіть значення радіуса циліндра');
let hcd = +prompt('Введіть значення висоти циліндра');
let areaCylinder = (r, h) => (2 * PI * r * h) + (2 * PI * Math.pow(r, 2)); //площа бічної поверхні + площа 2-х основ
console.log(areaCylinder(rcd, hcd) + ' - площа циліндра');
document.write(`<div>${areaCylinder(rcd, hcd)} - площа циліндра </div>`);

// - створити функцію яка приймає масив та виводить кожен його елемент
let massiv = [10, 20, 30, 40, 50, "octen"];
let masOutput = (mas) => {
    for (i = 0; i < mas.length; i++) {
        console.log(mas[i]);
        document.write(`${mas[i]} <br>`);
    }
}
masOutput(massiv);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let docTxt = prompt('Введіть будь-який текст');
let outDoc = (txt) => document.write(`<p>${txt}</p>`);
outDoc(docTxt);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let txtLi = (ххх) => {
    document.write(`<ul>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`</ul>`);
}
txtLi('All you need is LOVE!');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let txtList = (ххх, k) => {
    for (i = 0; i < k; i++) {
        document.write(`<ul>`);
        document.write(`<li>${ххх}</li>`);
        document.write(`<li>${ххх}</li>`);
        document.write(`<li>${ххх}</li>`);
        document.write(`</ul>`);
    }
}
txtList('LOVE is all you need!', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let massElemts = ['duck', 100, "BMW", true, 1500];
let buldLi = (mx) => {
    document.write(`<ul>`);
    for (i = 0; i < mx.length; i++) {
        document.write(`<li>${mx[i]}</li>`);
    }
    document.write(`</ul>`);
}
buldLi(massElemts);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let myChild = [{id: 1, name: 'Marko', age: 13}, {id: 2, name: 'Marta', age: 11}, {id: 3, name: 'Solomia', age: 4}];
let arrObj = (arrX) => {
    for (const arrayElement of arrX) {
        document.write(`<div>${arrayElement.id}. ${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
arrObj(myChild);
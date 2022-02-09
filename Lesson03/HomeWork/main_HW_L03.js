// --створити масив з:
//     - з 5 числових значень
//     - з 5 стічкових значень
//     - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbMs = [500, 27, 99, 1943, 100];
let textMs = ['bear', 'two', 'apple', 'fox', 'school'];
let allMs = ['one', 1980, true, 'max', 'dollars'];
console.log(numbMs);
console.log(textMs);
console.log(allMs);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptMs = [];
emptMs[0] = 12345;
emptMs[1] = 'Welcome';
emptMs[2] = 'on';
emptMs[3] = 'board';
emptMs[4] = true;
console.log(emptMs);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>All you need is LOVE</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} All you need is LOVE</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let k = 0;
while (k < 20) {
    document.write(`<h1>LOVE is All you need</h1>`);
    k++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
k = 0;
while (k < 20) {
    document.write(`<h1>${k} - LOVE is All you need</h1>`);
    k++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numAr10 = [41, 52, 63, 75, 53, 85, 97, 81, 100, 500];
for (i = 0; i < numAr10.length; i++) {
    console.log(numAr10[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let txtAr10 = ['Toyota', 'Tesla', 'BMW', 'KIA', 'Reno', 'Skoda', 'Volvo', 'VW', 'Opel', 'Audi'];
for (i = 0; i < txtAr10.length; i++) {
    console.log(txtAr10[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let anyAr10 = [4141, true, 'BMW', 123456, 'Reno', false, 'Volvo', 'best', 100500, 'Audi'];
for (i = 0; i < anyAr10.length; i++) {
    console.log(anyAr10[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let boolAr10 = [4141, true, 'asdf', 123456, 'qwerty', false, true, 1, "1", 0];
for (i = 0; i < boolAr10.length; i++) {
    if (typeof boolAr10[i] === 'boolean') {
        console.log(boolAr10[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let numbAr10 = [4141, true, 'asdf', 123456, 'qwerty', false, true, 1, "1", 0];
for (i = 0; i < numbAr10.length; i++) {
    if (typeof numbAr10[i] === 'number') {
        console.log(numbAr10[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let strAr10 = [4141, true, 'asdf', 123456, 'qwerty', false, true, 1, "1", 0];
for (i = 0; i < strAr10.length; i++) {
    if (typeof strAr10[i] === 'string') {
        console.log(strAr10[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//   Вивести в консоль всі його елементи в циклі.
let emptAr10 = [];
emptAr10[0] = 4141;
emptAr10[1] = true;
emptAr10[2] = 'asdf';
emptAr10[3] = 123456;
emptAr10[4] = 'qwerty';
emptAr10[5] = false;
emptAr10[6] = true;
emptAr10[7] = 1;
emptAr10[8] = "1";
emptAr10[9] = 0;
for (i = 0; i < emptAr10.length; i++) {
    console.log(emptAr10[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 10; i++) {
    console.log(`зараз ${i} ітерація`);
    document.write(`<div>зараз ${i} ітерація</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 100; i++) {
    console.log(`зараз ${i} ітерація`);
    document.write(`<div>зараз ${i} ітерація</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 100; i += 2) {
    console.log(`зараз ${i} ітерація з кроком 2`);
    document.write(`<p>зараз ${i} ітерація з кроком 2</p>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`зараз ${i} парна ітерація`);
        document.write(`<div>зараз ${i} парна ітерація</div>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(`зараз ${i} непарна ітерація`);
        document.write(`<p>зараз ${i} непарна ітерація</p>`);
    }
}
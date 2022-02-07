// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.abs(Math.floor(prompt("Введіть кількість хвилин від 0 до 59")));
if (time <= 14) {
    console.log(time+"хв - це перша чверть години.");
} else if (time <= 29){
    console.log(time+"хв - це друга чверть години.");
} else if (time <= 44){
    console.log(time+"хв - це третя чверть години.");
} else if (time <= 59){
    console.log(time+"хв - це четверта чверть години.");
} else {
    console.log("Будьте уважні! Ви некоректно ввели кількість хвилин!");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.abs(Math.round(prompt("Введіть день місяця від 1 до 31")));
if (day <= 10 && day != 0) {
    console.log(day+" - це перша декада місяця.");
} else if (day > 10 && day <= 20){
    console.log(day+" - це друга декада місяця.");
} else if (day > 20 && day <= 31){
    console.log(day+" - це третя декада місяця.");
} else {
    console.log("Ахтунг! Ви некоректно вказали день місяця!");
}

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt('Введіть true або false'); // перший варіант
if (test == "true"){
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

test == "true" ? console.log('Вірно') : console.log('Неправильно') ; // другий варіант

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('Введіть число 1 або 0 або -3');
if (a != 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день.
let dayOfWeek = +prompt("Введіть порядковий номер дня тижня від 1 до 7");
switch (dayOfWeek){
    case 1:
        console.log("Розклад на Понеділок...");
        break;
    case 2:
        console.log("Розклад на Вівторок...");
        break;
    case 3:
        console.log("Розклад на Середу...");
        break;
    case 4:
        console.log("Розклад на Четвер...");
        break;
    case 5:
        console.log("Розклад на Пятницю...");
        break;
    case 6:
        console.log("Розклад на Суботу...");
        break;
    case 7:
        console.log("Relax! Tosya will do it, in Monday!");
        break;
    default:
        console.log("Неправильно введені дані, повторіть ше раз.")
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('Давайте визначимо високосний рік чи ні. Введіть рік');
let cheсk = year % 4;
cheсk === 0 ? console.log(year+' - цей рік високосний') : console.log(year+' - цей рік не високосний');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let nazvaJs = prompt("Яка «офіційна» назва JavaScript?");
if (nazvaJs === 'ECMAScript'){
    console.log("Правильно!");
} else {
    console.log("Не знаєте? ECMAScript!");
}
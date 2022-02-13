// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let xMin = (x1, x2, x3) => {
    if (x1 < x2 && x1 < x3) {
        console.log(`${x1} - найменше число`);
        document.write(`${x1} - найменше число <br>`);
    } else if (x2 < x3 && x2 < x1) {
        console.log(`${x2} - найменше число`);
        document.write(`${x2} - найменше число <br>`);
    } else {
        console.log(`${x3} - найменше число`);
        document.write(`${x3} - найменше число <br>`);
    }
}
xMin(555, 321, 777);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let xMax = (x1, x2, x3) => {
    if (x1 > x2 && x1 > x3) {
        console.log(`${x1} - найбільше число`);
        document.write(`<p>${x1} - найбільше число </p>`);
    } else if (x2 > x3 && x2 > x1) {
        console.log(`${x2} - найбільше число`);
        document.write(`<p>${x2} - найбільше число </p>`);
    } else {
        console.log(`${x3} - найбільше число`);
        document.write(`<p>${x3} - найбільше число </p>`);
    }
}
xMax(123, 555, 246);

// - створити функцію яка повертає найбільше число з масиву
let someArray = [11, 53, 74, 6, 8, 10, 123456, 33, 999];
let xMaxArr = (xxx) => {
    let max = xxx[0];
    for (i = 0; i < xxx.length; i++) {
        if (xxx[i] > max) {
            max = xxx[i];
        }
    }
    return max;
}
console.log(`${xMaxArr(someArray)} - найбільше число з масиву`);
document.write(`${xMaxArr(someArray)} - найбільше число з масиву <br>`);

// - створити функцію яка повертає найменьше число з масиву
let xMinArr = (xxx) => {
    let min = xxx[0];
    for (i = 0; i < xxx.length; i++) {
        if (xxx[i] < min) {
            min = xxx[i];
        }
    }
    return min;
}
console.log(`${xMinArr(someArray)} - найменше число з масиву`);
document.write(`<h4>${xMinArr(someArray)} - найменше число з масиву</h4>`);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArr = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(`${sumArr(someArray)} - сумма елементів масиву`);
document.write(`${sumArr(someArray)} - сумма елементів масиву <br>`);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let average = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(`${average(someArray)} - середнє арифметичне елементів масиву`);
document.write(`<p>${average(someArray)} - середнє арифметичне елементів масиву </p>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minVsMax = (...xxx) => {
    let min = xxx[0];
    let max = xxx[0];
    for (const element of xxx) {
        if (element > max) {
            max = element;
        } else if (element < min) {
            min = element;
        }
    }
    console.log(`${max} - найбільше число`);
    return min;
}
document.write(`${minVsMax(27, 7, 150, 2222, 350)} - найменше число <br>`);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randNumb = (length) => {
    let emptArray = [];
    for (i = 0; i < length; i++) {
        emptArray.push(Math.round(Math.random() * 100));
    }
    return emptArray;
}
console.log(`${randNumb(10)} - рандомний масив`);
document.write(`<p>${randNumb(5)} - рандомний масив</p>`);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randArray = (length, limit) => {
    let emptArray = [];
    for (i = 0; i < length; i++) {
        emptArray.push(Math.round(Math.random() * limit));
    }
    return emptArray;
}
console.log(`${randArray(10, 20)} - рандомний масив`);
document.write(`<p>${randArray(5, 50)} - рандомний масив</p>`);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverse = (arr) => {
    newRevArr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newRevArr[ri] = arr[i];
    }
    return newRevArr;
}
console.log(reverse([11, 21, 31, 41, 51])+' - новий масив в зворотньому порядку');
document.write(`<p>${reverse([11, 21, 31, 41, 51])} - новий масив в зворотньому порядку</p>`);
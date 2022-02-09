// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let numbArray10 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let j = 0;
while (j < numbArray10.length) {
    console.log(numbArray10[j]);
    j++;
}

// 2. перебрати його циклом for
for (i = 0; i < numbArray10.length; i++) {
    console.log(numbArray10[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
j = 0;
while (j < numbArray10.length) {
    if (j % 2 === 1) {
        console.log(numbArray10[j]);
    }
    j++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < numbArray10.length; i++) {
    if (i % 2 === 1) {
        console.log(numbArray10[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
j = 0;
while (j < numbArray10.length) {
    if (numbArray10[j] % 2 === 0) {
        console.log(numbArray10[j]);
    }
    j++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < numbArray10.length; i++) {
    if (numbArray10[i] % 2 === 0) {
        console.log(numbArray10[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < numbArray10.length; i++) {
    if (numbArray10[i] % 3 === 0) {
        numbArray10[i] = "okten";
        console.log(numbArray10[i]);
    }
}
console.log(numbArray10);

// 8. вивести масив в зворотньому порядку.
for (i = numbArray10.length-1; i >= 0; i--) {
    console.log(numbArray10[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
let numbArray01 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let k = numbArray01.length-1;
while (k >= 0) {
    console.log(numbArray01[k]);
    k--;
}

// 2. перебрати його циклом for
for (i = numbArray01.length-1; i >= 0; i--) {
    console.log(numbArray01[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
k = numbArray01.length-1;
while (k >= 0) {
    if (k % 2 === 1) {
        console.log(numbArray01[k]);
    }
    k--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = numbArray01.length-1; i >= 0; i--) {
    if (i % 2 === 1) {
        console.log(numbArray01[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
k = numbArray01.length-1;
while (k >= 0) {
    if (numbArray01[k] % 2 === 0) {
        console.log(numbArray01[k]);
    }
    k--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = numbArray01.length-1; i >= 0; i--) {
    if (numbArray01[i] % 2 === 0) {
        console.log(numbArray01[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (i = numbArray01.length-1; i >= 0; i--) {
    if (numbArray01[i] % 3 === 0) {
        numbArray01[i] = "okten";
        console.log(numbArray01[i]);
    }
}
console.log(numbArray01);
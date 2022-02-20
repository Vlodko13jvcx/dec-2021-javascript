// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let nameNormal = (string, symbol) => {
    let newArr = [];
    if (string.includes(symbol)) {
        let a = string.split(symbol)
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        return newArr.join(' ');
    }
}
let n1Normal = nameNormal(n1, '.');
console.log(n1Normal);
let n2Normal = nameNormal(n2, '-');
console.log(n2Normal);
let n3Normal = nameNormal(n3, '_');
console.log(n3Normal);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArrNumbrs = (length, num) => {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.floor(Math.random() * num));
    }
    return emptyArr;
};
let ranArrNumb = randomArrNumbrs(10, 100);
console.log(ranArrNumb);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
ranArrNumb.sort((a, b) => a - b);
console.log(ranArrNumb);
ranArrNumb.sort((a, b) => b - a);
console.log(ranArrNumb);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати його за допомоги filter, залишивши тільки парні числа
let filterArr = ranArrNumb.filter((item) => item % 2 === 0);
console.log(filterArr);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrToStr = ranArrNumb.map(value => value+'');
console.log(arrToStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (arr, direction) => (direction === 'grow') ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
console.log(sortNums(nums, "grow"));
console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'grow') );
console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], '') );

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(newSort);

// -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
let newFilterD5 = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
console.log(newFilterD5);


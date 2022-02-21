//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars(model, factory, year, maxspeed, engineVolume) {
    this.model = model;
    this.factory = factory;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let audi = new Cars('A6', 'Ingolstadt', 2022, 226, 2.0);
console.log(audi);
audi.drive();
audi.info();
audi.newMaxSpeed(20);
audi.changeYear(2222);
audi.addDriver('Volodymyr');
console.log(audi);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars2 {
    constructor(model, factory, year, maxspeed, engineVolume) {
        this.model = model;
        this.factory = factory;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    }
    newMaxSpeed (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

let volkswagen = new Cars2('Touran', 'Wolfsburg', 2010, 230, 2.0);
console.log(volkswagen);
volkswagen.drive();
volkswagen.info();
volkswagen.newMaxSpeed(20);
volkswagen.changeYear(2022);
volkswagen.addDriver('Vlodko');
console.log(volkswagen.driver);
console.log(volkswagen);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let popelushkaArr = [
    new Popelushka('daryna', 30, 37),
    new Popelushka('anna', 22, 37),
    new Popelushka('solomia', 19, 38),
    new Popelushka('ira', 24, 36),
    new Popelushka('lesia', 26, 41),
    new Popelushka('Marta', 20, 39),
    new Popelushka('nadia', 29, 35),
    new Popelushka('genia', 18, 36),
    new Popelushka('nina', 21, 38),
    new Popelushka('olya', 27, 40),
];
console.log(popelushkaArr);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, findShoe) {
        this.name = name;
        this.age = age;
        this.findShoe = findShoe;
    }
}
let prince = new Prince('Marko', 26, 39);
console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let newcoupl = (popelushkaArr, prince) => {
    for (const item of popelushkaArr) {
        if (item.footsize === prince.findShoe) {
            return `Tvoya popelushka: ${item.name}`
        }
    }
};
console.log(newcoupl(popelushkaArr, prince));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findPrincess = popelushkaArr.find((item) => item.footsize === prince.findShoe);
console.log(findPrincess);
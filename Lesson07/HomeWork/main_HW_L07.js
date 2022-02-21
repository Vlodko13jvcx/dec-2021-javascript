// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

let user1 = new User(1, 'vasya', 'pupkin', 'vasa@mail.com', 380970000001);
console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let emptyUserArr = [
    new User(11, 'Anna', 'Karenina', 'chyhchyh@gmail.com', 380670000001),
    new User(93, 'Koko', 'Chanel', 'water@gmail.com', 380670000002),
    new User(36, 'Nino', 'Kino', 'vynnyk@gmail.com', 380670000003),
    new User(78, 'Stepan', 'Bandera', 'father@gmail.com', 380670000004),
    new User(50, 'Stefcia', 'Baba', 'babulya@gmail.com', 380670000005),
    new User(61, 'Andriy', 'Sadovyj', 'lviv@gmail.com', 380670000006),
    new User(43, 'Petro', 'Roshen', 'roshen@gmail.com', 380670000007),
    new User(82, 'Igor', 'Kolomojskyj', 'pryvat@gmail.com', 380670000008),
    new User(25, 'Rinat', 'Ahmetov', 'skm@gmail.com', 380670000009),
    new User(100, 'Ilon', 'Mask', 'tesla@gmail.com', 380670000010)
];
console.log(emptyUserArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterArr = emptyUserArr.filter((xxx) => {
    if (xxx.id % 2 === 0) {
        return xxx;
    }
});
console.log(filterArr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArrId = emptyUserArr.sort((a, b) => a.id - b.id);
console.log(sortArrId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом
// зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let emptyArr = [];
emptyArr.push(new Client(20, 'Ivan', 'Franko', 'kamenyar@gmail.com', 380970000001, ['foxMykyta', 'manybooks']));
emptyArr.push(new Client(200, 'Lesya', 'Ukrainian', 'ukrainel@gmail.com', 380970000002, ['iWillNotDie']));
emptyArr.push(new Client(100, 'Taras', 'Shevchenko', 'sheva@gmail.com', 380970000003, ['Zapovit', 'whenIwas13']));
emptyArr.push(new Client(1000, 'Stepan', 'Bandera', 'ourFather@gmail.com', 380970000004, ['Ukraine', 'UberAles']));
emptyArr.push(new Client(999, 'Evgen', 'Konovalec', 'ounupa@gmail.com', 380970000005, ['OUN-UPA', 'resistance', 'waskilled']));
emptyArr.push(new Client(77, 'Stefcia', 'Baba', 'babulya@gmail.com', 380970000010, ['village', 'gorod', 'milk', 'eggs']));
emptyArr.push(new Client(61, 'Andriy', 'Sadovyj', 'lviv@gmail.com', 380970000007, ['where_my_10%', 'euro2012']));
emptyArr.push(new Client(43, 'Petro', 'Roshen', 'roshen@gmail.com', 380970000008, ['candys', 'army', 'language', 'faith', 'charity']));
emptyArr.push(new Client(85, 'Igor', 'Kolomojskyj', 'pryvat@gmail.com', 380970000009, ['Privat', 'gotocoffee', 'thief', '$$$$$']));
emptyArr.push(new Client(6, 'Rinat', 'Ahmetov', 'skm@gmail.com', 380970000006, ['doYouHaveSemki?', 'orderedmurder', 'stolenmoney']));
console.log(emptyArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortCLients = emptyArr.sort((a, b) => a.order.length - b.order.length);
console.log(sortCLients);
sortCLients = emptyArr.sort((a, b) => a.phone - b.phone);
console.log(sortCLients);
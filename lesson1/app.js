// ДЗ:
//
//     Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)


const path = require("path");
const fs = require('fs')

fs.mkdir(path.join(__dirname, 'main'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.mkdir(path.join(__dirname, 'main', "online"), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.mkdir(path.join(__dirname, 'main', "InPerson"), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

const onlineUsers = [
    {name: 'Denys', age: 20, city: 'Lviv' },
    {name: 'Victoria', age: 20, city: 'Lviv' }
];
const inPersonUsers = [
    {name: 'Ivan', age: 50, city: 'Odessa' },
    {name: 'Masha', age: 32, city: 'Poltava' }
];

fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${onlineUsers.map(user =>
    `\n\nNAME: ${user.name} \nAGE: ${user.age} \nCITY: ${user.city}`)}`, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${inPersonUsers.map(person =>
    `\n\nNAME: ${person.name} \nAGE: ${person.age} \nCITY: ${person.city}`)}`, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

const changeFilesPlace = () =>{
    if (path.join(__dirname,'main','inPerson','inPerson.txt')) {
        fs.rename(path.join(__dirname,'main','inPerson','inPerson.txt'),
            path.join(__dirname,'main','online','inPerson.txt'),(err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            })
    }

    if (path.join(__dirname,'main','online','online.txt')) {
        fs.rename(path.join(__dirname,'main','online','online.txt'),
            path.join(__dirname,'main','inPerson','online.txt'),(err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            })
    }
}
changeFilesPlace()



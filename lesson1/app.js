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

fs.appendFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), 'name: "Andrii", \n' +
    'age: 22, \n' +
    'city: "Lviv"', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), 'name: "Den",\n' +
    'age: 222,\n' +
    'city: "Lviv"', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.writeFile(path.join(__dirname,'main','online','onlineUsers.txt'),'name: Andrii", \n' +
    'age: 22, \n' +
    'city: "Lviv"',(err)=>{
    if (err) {
        console.log(err);
        throw err;
    }
})
fs.writeFile(path.join(__dirname,'main','online','onlineUsers.txt'),'name: "Den",\n' +
    'age: 222,\n' +
    'city: "Lviv"',(err)=>{
    if (err) {
        console.log(err);
        throw err;
    }
})

//перестановка файлів текстових файлів місцями
// fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),
//     path.join(__dirname, 'main', 'online', 'inPersonUsers.txt'), (err) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//     })
//
// fs.rename(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//     path.join(__dirname, 'main', 'inPerson', 'onlineUsers.txt'), (err) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//     })
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу,
// дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

const path = require("path");
const fs = require('fs')

fs.mkdir(path.join(__dirname, 'Task1'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err
    }
})
fs.writeFile(path.join(__dirname, 'Task1', 'Num1.txt'), 'help me', (err) => {
    if (err) {
        console.log(err)
        throw err
    }
})
fs.writeFile(path.join(__dirname, 'Task1', 'Num2.txt'), '', (err) => {
    if (err) {
        console.log(err)
        throw err
    }
})

function dataForNum2() {
    fs.readFile(path.join(__dirname, 'Task1', 'Num1.txt'), (err, data) => {
        if (err) {
            console.log(err)
            throw err
        }

        fs.writeFile(path.join(__dirname, 'Task1', 'Num2.txt'), data, (err) => {
            if (err) {
                console.log(err)
                throw err
            }

        })
    })
}

dataForNum2()

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться. Також вийде callback hell

fs.mkdir(path.join(__dirname, 'Task2'), {recursive:true},(err)=>{
    if (err){
        console.log(err)
        throw err
    }
    fs.writeFile(path.join(__dirname,'Task2','File1.txt'),'1,2,3,kokos',(err)=>{
        if (err){
            console.log(err)
            throw err
        }
        fs.mkdir(path.join(__dirname,'Task2','newFile'), {recursive:true}, (err)=>{
            if (err){
                console.log(err)
                throw err
            }
            fs.mkdir(path.join(__dirname,'Task2','newFile'), {recursive:true}, (err)=>{
                if (err){
                    console.log(err)
                    throw err
                }
                fs.writeFile(path.join(__dirname,'Task2','newFile','newFile.txt'),'',(err)=>{
                    if (err){
                        console.log(err)
                        throw err
                    }
                    fs.readFile(path.join(__dirname,'Task2','File1.txt'),(err,data)=>{
                        if (err){
                            console.log(err)
                            throw err
                        }
                        fs.writeFile(path.join(__dirname,'Task2','newFile','newFile.txt'),data,(err)=>{
                            if (err){
                                console.log(err)
                                throw err
                            }
                        })
                    })
                })
            })
        })
    })
})

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані
// які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки,
// вам потрібно їх перейменувати і додати до назви префікс _new

fs.mkdir(path.join(__dirname, 'Task3', 'example1'), err => {
    if (err) {
        console.log(err)
        throw err
    }
})

fs.mkdir(path.join(__dirname, 'Task3', 'example2'), err => {
    if (err) {
        console.log(err)
        throw err
    }
})

fs.writeFile(path.join(__dirname, 'Task3', 'file1.txt'), 'Hello Octen', err => {
    if (err) {
        console.log(err)
        throw err
    }
})

fs.writeFile(path.join(__dirname, 'Task3', 'file2.txt'), 'Good Evening', err => {
    if (err) {
        console.log(err)
        throw err
    }
})

const searchFiles = (file) => {
    fs.readdir(path.join(__dirname,`${file}`),(err,data) => {
        if (err){
            console.log(err)
            throw err
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].includes('.txt')){
                fs.truncate(path.join(__dirname,`${file}`,`${data[i]}`),err=>{
                    if (err){
                        console.log(err)
                        throw err
                    }
                })
            }else {
                fs.rename(path.join(__dirname,`${file}`,`${data[i]}`),
                    path.join(__dirname,`${file}`,`new_${data[i]}`),err=>{
                        if (err){
                            console.log(err)
                            throw err
                        }
                    })
            }
        }
    })
}
searchFiles('Task3')


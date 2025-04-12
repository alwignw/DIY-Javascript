/*
Sebelumnya kita selalu membuat function dengan nama
Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function
Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter
 */

//anonymous function divariable
let say = function (name){
    console.info(`hello ${name}`)
}

say('alwi')

function  giveName(callback){
    callback('wiwi')
}

giveName(function (name){
    console.info(name)
})
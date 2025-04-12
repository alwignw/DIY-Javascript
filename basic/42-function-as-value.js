/*
Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value
Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya
 */

function sayHello(name){
    console.info(`hello ${name}`)
}

let say = sayHello

sayHello('gun')
say('alwi')

//function di parameter


function GiveName(callback){
    callback('alwi')
}

GiveName(sayHello)
GiveName(say)
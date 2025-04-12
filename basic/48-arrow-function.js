/*
Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
Dinamakan arrow function karena menggunakan tanda => (seperti  anak panah)
Berikut contoh beberapa kekurangan arrow function :
tidak memiliki fitur arguments object
tidak bisa menggunakan function generator
tidak bisa mengakses this (yang nanti akan dibahas di function di object)
tidak bisa mengakses super (yang nanti akan dibahas di JavaScript Object Oriented Programming)
 */

const sayhello = (value)=>{
    console.info(value)
}

sayhello('hello world')

//Arrow Function Tanpa Block
/*
Jika sebuah arrow function isinya sederhana, misal hanya satu baris
Kita bisa membuat arrow function tanpa harus menggunakan block
 */

const sayLove = (name)=> console.info('iloveu '+name)
sayLove('balmond')

//Arrow Function Return Value
/*
Arrow function bisa mengembalikan value, sama seperti function biasanya
Jika menggunakan block, maka kita perlu menggunakan kata kunci return
Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return
 */

const sum = (angka1 , angka2) =>  angka1 + angka2;
console.info(sum(2 , 2))


//Arrow Function Tanpa Kurung Parameter
//Jika parameter di arrow function hanya satu, kita bisa tidak menggunakan kurung pada parameter

const saySayang = name => console.info("aku sayang kamu "+ name);
saySayang("kagura")

//Kode : Arrow Function Sebagai Parameter
/*
Karena arrow function sama seperti anonymous function
Jadi kita juga bisa menggunakan arrow function sebagai parameter di function lain
 */

function NameAssasin( callback){
        callback("hayabusa")
}

NameAssasin((name)=>{
    console.info(name)
})
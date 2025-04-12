/*
Scope merupakan area akses sebuah data
Ada dua jenis scope, global scope dan local scope.
Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
Data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses
di local scope tersebut atau di scope local dibawahnya (dalam kasus function dalam function)
 */

//global scope
let counter = 0;

function  hitme(){
    counter++
}

hitme();
hitme();

console.info(counter);

//local scope
function  first(){
    let firstName = 'alwi'
}

function  last(){
    let lasName = 'gunawan'
}

first();
last();

//console.info(firstName);
//console.info(lasName);

//nested function scope
function kendaraan(){
    let nama = "mobil"
    function  mobil(){
        console.info(nama)
    }
    mobil();
}

kendaraan()
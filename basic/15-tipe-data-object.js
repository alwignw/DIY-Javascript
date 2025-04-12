/*
Di bahasa pemrograman lain seperti PHP, kita bisa menggunakan index beruba tipe data lain selain number, misal string
Fitur ini biasanya disebut associative array atau hash
Di JavaScript associative array tidak didukung.
Jika kita memaksa memasukkan data bukan number di index Array, maka JavaScript akan merubah tipe data Array
tersebut menjadi object, dan ini bisa berbahaya, karena beberapa operasi di array mungkin bisa berubah hasilnya
*/

let associativearray = []
associativearray['alwi'] = 'alwi'
console.log(typeof(associativearray));

//tipe data objecgt
//Tipe data object adalah tipe data yang mirip dengan tipe data Array
//Yang membedakan adalah index pada tipe data object bisa menggunakan string
//Index di object biasanya disebut attributes atau properties, bukan index

let people = {};

//add atau update
people["nama"] = "alwi"
people["alamat"] = "indonesia"
people["status"] = "single"
console.log(people);

//menghapus
delete  people["status"]
console.log(people);

//mengakses property
//namaobjec.namaproperty

console.log("nama  : "+ people.nama)
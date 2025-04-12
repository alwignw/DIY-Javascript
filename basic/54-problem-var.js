/*
Sebelumnya sudah dijelaskan bahwa penggunaan var sudah tidak direkomendasikan lagi, dan diganti dengan let
Pertanyaannya kenapa?
Alasan var tidak direkomendasikan digunakan lagi adalah, karena var tidak memiliki block scope, artinya dia tidak mengikat ke local scope yang sebelumnya sudah kita bahas
Karena masalah ini, var bisa tidak terprediksi
Kita akan buat contoh penggunaan var dan let
 */

//Kode : Menggunakan let
//global scope
let i =20

for (let i = 0 ; i< 10 ; i++){
    console.info('local '+i)
}

console.info('global '+ i)
console.info('--------')
var ii =20

for (var ii = 0 ; ii< 10 ; ii++){
    console.info('local '+ii)
}

console.info('glibal'+ ii)
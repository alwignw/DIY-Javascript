//variable tempat untuk menyimpan data
/*
javascript adalah dynamic language, artinya variable di js tidak terpaku harus
menggunakan 1 tipe data, kita bisa mengubah-ubah satu tipe data di variable yang sama
 */


var first_name = "Alwi"
var last_name = "Gunawan"

console.info(first_name +" "+ last_name)

//keyword let dan const
//sebelum taun 2015 kata kunci untuk membuat variable hanya bisa digunakan var
//namun taun 2015 sejak EcmaScript2015, diperkenalkan kata kunci baru yaitu let dan const
/*
js skrang tidak merekomendasikan lagi untuk menggunakan var ,namun di ganti jadi let,
hal ini dikarnakan adamasalah dari design awal var
*/

let let_first_name = "alwi"
let let_last_name = "tendean"
console.info(let_first_name + " " + let_last_name);

//kata kunci const
//kata kunci const berbeda dengan let dan var dimana const ini ketika kita isi datanya
//dia tidak dapat berubah2 lagi
//varibale ini juga dapat di sebut constant

const negara ='indonesia'
negara = 'amerika'
console.error(negara);

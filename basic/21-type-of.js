/*
typeof merupakan operator yang bisa kita gunakan untuk melihat tipe data sebuah value atau variable
Karena JavaScript merupakan dynamic langauge, jadi kadang kita perlu mengecek tipe data sebuah value atau variable menggunakan operator typeof
Hasil dari operator typeof adalah string tipe datanya
 */

//undefine -> undefine
//Null -> object
//Boolean -> boolean
//Number -> number
//bigint -> bigint
//string -> string
//symbol -> symbol
//function -> function
//lainnya -> object


let data = undefined
console.info(typeof data);

data = null
console.info(typeof data);

data = 12;
console.info(typeof data);

data = BigInt('1'); //support di node 14>
console.info(typeof data);

data = 'indonesia';
console.info(typeof data);

data = Symbol('a');
console.info(typeof data);

data = function (){};
console.info(typeof data);

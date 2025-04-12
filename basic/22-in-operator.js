/*
In operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object atau tidak
Jika property tersebut ada di object, maka hasilnya true, sedangkan jika tidak, maka hasilnya false
Tidak hanya di object, In juga bisa digunakan untuk mengecek index di Array
 */

const transportasi ={
    nama : 'mobil',
    roda : 4
}

const result = "nama" in transportasi;

console.info(result);

/*
In operator hanya akan mengecek apakah sebuah property atau index ada atau tidak
Jadi walaupun nilai property atau index nya undefined atau null, maka tetap akan dianggap ada
 */

const array = [null , undefined , 1]
let result2 = 0 in array;
console.info(result2);
result2 = 3 in array;
console.info(result2);
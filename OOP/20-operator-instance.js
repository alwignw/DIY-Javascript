/*
Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan

 */

/*
Operator instanceof mendukung class inheritance,
artinya instanceof juga bisa digunakan untuk mengecek,
apakah sebuah object adalah instance dari class tertentu, atau turunan dari class tertentu?

 */

class  employee{

}

class  manager extends  employee{

}

const alwi = new manager();
const mulyadi = new employee();

console.info(alwi instanceof manager)
console.info(alwi instanceof employee)

console.info(mulyadi instanceof manager)
console.info(mulyadi instanceof employee)

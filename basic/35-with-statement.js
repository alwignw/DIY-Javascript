/*
With statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya
 */

const mobil ={
    name :'lambo',
    warna :'merah'
}

with (mobil) {
   
    name = "avansa"
    console.info(name)
    console.info(warna)
}

console.log(mobil)
//tidak direkomendasikan
/*
Walaupun fitur with statement ini sangat menarik
Namun kebanyakan orang tidak merekomendasikan penggunaan with statement
Hal ini dikarenakan with statement kadang membuat sebuah kode menjadi ambigu

 */


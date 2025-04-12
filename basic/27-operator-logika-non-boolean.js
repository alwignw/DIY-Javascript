/*
Sebelumnya kita sudah tahu bahwa operator logika AND (&&) dan OR (||)  digunakan untuk dua data boolean
Namun berbeda di JavaScript, kita bisa menggunakan operator logika AND dan OR untuk tipe data non boolean
 */

/*
Operator logika OR (||), membaca dari kiri ke kanan.
Operator ini akan mengambil nilai pertama yang truthy.
Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil
 */

console.info("hello" || "")
console.info("" || "hai hai")
console.info( undefined || "oi oi")
console.info( undefined || null)

/*
Operator logika AND (&&), membaca dari kiri ke kanan.
Operator ini akan mengambil nilai pertama yang falsy.
Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil

 */

console.info("hello" && "")
console.info("" && "hai hai")
console.info( undefined && "oi oi")
console.info( undefined && null)
console.info( undefined && null)

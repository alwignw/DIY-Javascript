/*
Sebenarnya setelah kita membuat object, kita bisa dengan mudah menambahkan property ke dalam object tersebut hanya dengan menggunakan nama variable nya,
diikuti tanda titik dan nama property
Namun jika seperti itu, alhasil, constructor function yang sudah kita buat tidak terlalu berguna,
karena property nya hanya ada di object yang kita tambahkan property
Untuk menambahkan property di dalam semua object yang dibuat dari constructor function,
kita bisa menggunakan kata kunci this lalu diikuti dengan nama property nya
 */

function Person(){
    this.NamaDepan = ""
    this.NamaBelakang=""
}

const OrangIndo = new Person();
OrangIndo.NamaDepan = "Frangki"
OrangIndo.NamaBelakang = "Hidayat"

const OrangJepang = new Person();
OrangJepang.NamaDepan="Haruna"
OrangJepang.NamaBelakang = "Mashasi"

console.info(OrangIndo)
console.info(OrangJepang)
/*
JavaScript sebelumnya dikenal dengan pemrograman berbasis prototype
Memang agak sedikit membingungkan, dan tidak dipungkiri, banyak sekali yang bingung dengan konsep prototype di JavaScript
Pada chapter ini, kita akan bahas tentang konsep prototype
 */

/*
Saat kita membuat object dari constructor function, object tersebut disebut instance, semua property (baik itu value atau method), akan berada di dalam instance object nya
Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototype nya, misal ketika kita membuat constructor function Person, maka akan ada Person.prototype
Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototype nya
Untuk mengakses prototype milih sebuah instance, kita bisa menggunakan __proto__
 */

//Cara Kerja Prototype Inheritance
/*
Bagaimana bisa property di prototype diakses dari object instance?
Ketika kita mengakses property di object instance, pertama akan di cek apakah di object tersebut terdapat property tersebut atau tidak, jika tidak, maka akan di cek di __proto__ (prototype) nya,
jika masih tidak ada, akan di cek lagi di __proto__ (prototype) yang lebih tinggi, begitu seterusnya, sampai berakhir di Object Prototype
 */

function person(){
    this.firstName = 'alwi'
    this.lastname = 'gunawan'
    this.sayHello = function (){
        console.log("guys")
    }
}

person.prototype.run = function (){
    console.log("run bro")
}
const orang = new person();

console.info(orang)
orang.run()
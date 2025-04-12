/*
Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function
Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object
Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
Untung nya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype
 */

class  Person{
    constructor(name) {
        this.name = name
        console.log(name)
    }

    sayHello(){
        console.log(`hallo ${this.name}`)
    }
}

const orang = new Person("alwi");
console.info(orang)
orang.sayHello();
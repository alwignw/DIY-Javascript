/*
Sama seperti pada constructor function, dalam class pun kita bisa menambahkan property
Karena hasil akhirnya adalah sebuah object, jadi menambahkan property di class bisa juga dilakukan di instance object nya

 */

class  Person{
    constructor(name) {
        this.name = name
        console.log(name)
    }
}

const orang = new Person("alwi");
console.info(orang)
/*
Class Inheritance sifatnya seperti Prototype Inheritance
Bagaimana dengan Constructor Inheritance? Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini
Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci super di dalam constructor
Kata kunci super digunakan untuk memanggil constructor super class
Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor
 */


class  employee {
    constructor(nilai) {
        this.nilai = nilai
    }

    sayPraise(){
        return this.nilai > 75 ? 'smart' : 'stupid';
    }
    sayHello(name){
        console.info(`halo karyawan ${name}`)
    }
}

class manager extends  employee{
    constructor(nilai) {
        super(nilai);
    }

    sayHello(name){
        console.info(`halo manager ${name} you are ${this.sayPraise()}`)
    }
}

const babu = new employee("80");
babu.sayHello('koko');

const bos = new manager("80");
bos.sayHello('Alwi');
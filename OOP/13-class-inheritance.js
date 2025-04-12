/*
Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit tricky cara pembuatannya
Untungnya itu diperbaiki di ES6 dengan fitur class nya
Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class
 */

class  employee {
    sayPraise(){
        return 'smart'
    }
    sayHello(name){
        console.info(`halo karyawan ${name}`)
    }
}

class manager extends  employee{
    sayHello(name){
        console.info(`halo manager ${name} you are ${this.sayPraise()}`)
    }
}

const babu = new employee();
babu.sayHello('koko');

const bos = new manager();
bos.sayHello('Alwi');


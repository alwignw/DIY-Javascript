/*
Class juga mendukung pembuatan getter dan setter
Perlu diingat, getter dan setter ini akan berada di prototype, bukan di instance object
 */

class  Person{
    constructor(depan , belakang) {
        this.depan = depan;
        this.belakang = belakang;
    }
    get FullName(){
        return `${this.depan} ${this.belakang}`
    }

    set FullName(value){
        const result = value.split(" ");
        this.depan = result[0];
        this.belakang = result[1];
    }



}

const alwi = new Person("alwi" , "gunawan");

console.log(alwi.FullName);

alwi.FullName = "alwi cookie"
console.log(alwi.FullName);
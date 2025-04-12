/*
Dalam constructor kita biasanya membuat property baik itu berisi value ataupun function
Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain tersebut
Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)
 */

function  employee(firstname){
    this.firstName =  firstname
    this.sayHello=function (){
        console.log("hi bro "+ this.firstName);
    }
}

function manager(){
    employee.call(this, "Alwy");
}

const managers = new manager();
managers.sayHello();
/*
Sekarang kita sudah tahu, bahwa prototype selalu memiliki parent, artinya dia adalah turunan, parent tertinggi adalah Object prototype
Pertanyaannya bagaimana jika kita ingin melakukan inheritance ke Prototype lain?
Hal ini juga bisa dilakukan, namun agak sedikit tricky, karena hal ini, sebenarnya untuk JavaScript modern, tidak direkomendasikan lagi praktek OOP menggunakan Prototype, karena di ES6 sudah dikenalkan kata kunci class yang akan nanti dibahas di chapter tersendiri
 */

function  employee(name){
    this.name = name;
}

function  manager(name) {
    this.name = name
}

manager.prototype = Object.create(employee.prototype);

manager.prototype.sayHello = function (){
    console.log('halo ini manager')
}

employee.prototype.sayHello = function (){
    console.log('halo ini employee')
}

const managers = new manager();
managers.sayHello()

const employees = new employee();
employees.sayHello();
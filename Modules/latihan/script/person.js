
export class Person{
    name = "Orang baru";
    
    constructor(name =  this.name){
        this.name = name;
    }

    sayHello(){
        console.log("Hello kamu " + this.name);
    }
}
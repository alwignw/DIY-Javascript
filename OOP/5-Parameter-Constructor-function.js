/*
Karena dalam JavaScript, class adalah berbentuk function, jadi secara default, function tersebut bisa memiliki parameter
Constructor function sama seperti function biasanya, bisa memiliki parameter, hal ini membuat ketika kita membuat object,
kita bisa mengirim langsung data lewat parameter di constructor function tersebut
 */

function Person(firstname , lastname){
    this.NamaDepan = firstname
    this.NamaBelakang= lastname
    this.sayHello  =  function (nama , type){
        let message;
        switch (type) {
            case 'idn'  :
                message = `Hallo :nama saya :replacement `
                break;
            case 'jpn' :
                message = `Kon'nichiwa :nama watashinonamaeha :replacement desu`
                break;
        }
        let lastPart = message.replace(':replacement' , `${this.NamaDepan} ${this.NamaBelakang}`);
        lastPart = lastPart.replace(':nama' , nama);
        console.log(lastPart)

    }
}

const OrangJepang = new Person("hitomi" , "tanaka");

OrangJepang.sayHello( require("os").userInfo().username , 'jpn')
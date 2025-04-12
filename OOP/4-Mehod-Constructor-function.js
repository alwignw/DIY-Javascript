/*
Sama seperti pada tipe data object biasanya, kita juga bisa menambahkan method di dalam constructor function
Jika kita tambahkan method di constructor function, secara otomatis object yang dibuat akan memiliki method tersebut

 */

function Person(){
    this.NamaDepan = ""
    this.NamaBelakang=""
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

const OrangIndo = new Person();
OrangIndo.NamaDepan = "Frangki"
OrangIndo.NamaBelakang = "Hidayat"

const OrangJepang = new Person();
OrangJepang.NamaDepan="Haruna"
OrangJepang.NamaBelakang = "Mashasi"

OrangIndo.sayHello( require("os").userInfo().username , 'idn')
OrangJepang.sayHello( require("os").userInfo().username , 'jpn')
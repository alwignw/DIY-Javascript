/*
Pada tipe data object, kita sudah membahas tentang property di object
Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object
Cara pembuatannya pun sama dengan function sebagai value
Function di object kadang disebut juga sebagai Object Method
 */

//Kode : Menambah Method ke Object
const orang ={
    nama : 'alwi',
    umur : function (){
        console.log('dewasa')
    }
}

orang.umur()


//Kode : Menambah Method ke Object

const kendaraan = {
    nama : 'mobil'
}

kendaraan.melaju = function (){
    console.info(this.nama + ' melaju')
}

kendaraan.melaju();
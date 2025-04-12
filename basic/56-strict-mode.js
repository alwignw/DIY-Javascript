/*
Saat kita menjalankan kode program JavaScript, secara default kode program kita berjalan dalam mode tidak strict, atau istilahnya sloppy mode
Pada ECMAScript 5, diperkenalkan mode strict, dimana ketika strict mode dijalankan,
maka akan merubah beberapa cara kerja di JavaScript, seperti :
    Merubah beberapa JavaScript error dari yang tadinya silent error, menjadi throw error (terlihat)
    Memperbaiki beberapa kesalahan engine JavaScript untuk optimisasi
    Menolak beberapa kode perintah yang kedepannya akan digunakan di ECMAScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
 */

function  UsesTrict(){
    'use strict'
    const person = {
        firtsName: 'eko'
    }
    with (person){
        console.info(firtsName)
    }
}

UsesTrict()

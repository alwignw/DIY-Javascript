//dalam js if adalah salah satu kata kunci yang di gunakan untuk percabangan
//Percabangan artinya kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
//Hampir di semua bahasa pemrograman mendukung if expression

let value = 90;

if(value > 80){
    console.info("value lebih besar dari 80");
}

//else expression
/*
Blok if akan dieksekusi ketika kondisi if bernilai true
Kadang kita ingin melakukan eksekusi program tertentu jika kondisi if bernilai false
Hal ini bisa dilakukan menggunakan else expression
 */


if(value > 100){
    console.info("value lebih besar dari 80");
}else{
    console.info("value kurang  dari 100");
}

/*
Kadang dalam If, kita butuh membuat beberapa kondisi
Kasus seperti ini, di JavaScript kita bisa menggunakan Else If expression
 */

value = 120;
if(value > 100){
    console.info("value lebih besar dari 100");
}
else if(value > 120){
    console.info("value lebih besar dari 120");
}
else{
    console.info("value kurang  dari 100");
}

/*

Function generator adalah function yang digunakan untuk membuat data generator
Generator adalah data yang bisa di interasi seperti Array
Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
Dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya
 */

//function generator sederhana

function* createNames(){
    yield  "alwi";
    yield  "cookie";
    yield  "asyura"
}

const names = createNames();
for (let name of names){
    console.info(name)
}


//function generator kompleks
function* buatGanjil(value){
    for (let i = 1; i <= value ; i++){
        if(i % 2 === 1) {
            console.info('yield : '+ i)
            yield i
        }
    }
}

const angkaGanjil = buatGanjil(100)
console.info(angkaGanjil.next().value)
console.info(angkaGanjil.next().value)
// for(const angka of angkaGanjil ){
//     console.info(angka)
// }

//lazy evaluation
/*
Generator itu sifatnya lazy
Jadi artinya jika   data belum kita ambil dari generator,
maka yield selanjutnya tidak akan di eksekusi
kalo di butuhkan dia di eksekusi
klo tidak dia tidak di eksekusi
 */

//eager

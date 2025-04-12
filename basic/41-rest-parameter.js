/*
Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array
Untuk membuat rest parameter, ada ketentuannya
Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah, kecuali memang cuma ada 1 parameter
Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument
 */

function sum(name, ...data){
    let total=0;
    for (const element of data){
        total += element;
    }
    console.info(`Total ${name} is ${total}`)
}

sum('Banana', 1,2,3,4,5,6,7);
sum('apple', 9,8,8,2,3,5);

//Spread Syntax
/*
Kadang kita terlanjur memiliki data berupa Array
Tapi untungnya kita juga bisa mengirim Array ke Rest Parameter
Kita bisa gunakan … (titik tiga kali) diikuti dengan array nya ketika memanggil function
Fitur ini dinamakan Spread Syntax
 */

sum('orange', ...[1,5,6,7,3,4]);

//Arguments Object
/*
Sebelum ada fitur rest parameter, di JavaScript sudah ada fitur yang bernama arguments object
Ini adalah fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan object bernama arguments
arguments secara otomatis bisa digunakan di function
Namun perlu diingat, bahwa untuk JavaScript saat ini, lebih baik disarankan menggunakan rest parameter dibanding arguments object
 */

function oldSum(){
    let total=0;
    for (const element of arguments){
        total += element;
    }
    console.info(`Total  is ${total}`)
}

oldSum(1,2,3,4,5,6,7,8,)
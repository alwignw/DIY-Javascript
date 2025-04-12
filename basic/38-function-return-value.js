/*
Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya.
Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan.
Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa menggunakan Array sebagai return value nya
 */

function getFinalScore(value){
    if(value > 90) return 'A';
    else if(value >= 80) return 'B';
    else if(value > 70) return 'C';
    else if(value > 60) return 'D';
    else return 'C';
}

let result = getFinalScore(80)
console.info(result);


//Menghentikan Eksekusi dengan Return
/*
Saat kita menggunakan kata kunci return, maka kode setelah return tersebut tidak akan dieksekusi
Kita bisa menggunakan return untuk menghentikan eksekusi sebuah function
 */

function isContains(array , search){
    for (const element of array){
        if(element === search) return 'element ada'
    }
    return 'no element'
}

console.info(isContains([1,2,3,4,5,6,7,8,9], 11))
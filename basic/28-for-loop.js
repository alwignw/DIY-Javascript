//for adalah salah satu keyword yang dapat melakukan perulangan
//blok kode yang terdapat di dalam for akan selalu di ulangi selama kondisi for terpenuhi

// for(init statement , kondisi , post statement){
// block perulangan
// }

//initstatement dieksekusi hanya sekali diawal sebelum perulangan
//kondisi akan dilakukan pengeceekan dalamm setiap perulangan
//post statemment akan di eksekusi setiap kali di akhir perluangan
//Init statement, Kondisi dan Post Statement tidak wajib diisi, jika Kondisi tidak
//diisi, berarti kondisi selalu bernilai true

// for(; ;){
//     console.info('s')
// }

//kondisi
let data = 5
for(;data > 1;){
    console.info(data)
    data--
}

//init statement

console.info('------')
for(let i = 5;i > 1;){
    console.info(i)
    i--
}

//post statement
console.info('------')
for(let i = 5;i > 1; i--){
    console.info(i)
}
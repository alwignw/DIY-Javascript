/*
Pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch
Sama dengan pada perulangan, break juga digunakan untuk menghentikan seluruh perulangan.
Namun berbeda dengan continue, continue digunakan untuk menghentikan perulangan saat ini,
lalu melanjutkan ke perulangan selanjutnya
 */

//break;
let counter = 1;
while (true){
    console.info(counter)
    if(counter === 10) break;
    counter++
}

//continue

for (let i = 1; i <= 10 ;i++){
    if(i % 2 === 0 ){
        continue;
    }
    console.info('perulangan ganjil'+i);
}
/*
Jika For In digunakan untuk melakukan iterasi property atau index, berbeda dengan For Of,
ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, String dan lain-lain
For of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.
 */

const names=['aku' , 'kamu' , 'dia']

for (const value of names){
    console.info(value)
}


const fullName = 'alwi gunawan'
for(const letter of fullName){
    console.info(letter);
}
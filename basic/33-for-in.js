/*
For In merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array
Walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array,
karena biasanya kita jarang sekali butuh data index untuk Array,
kita bisa menggunakan For Of (yang dibahas setelah ini)
 */

const person = {
    nama : "alwi",
    jk : 'lakilaki',
    alamat : 'bogor'
}

for (const property in person){
    console.info(`property ${property} : ${person[property]}`);
}

const fruits=['apple', 'banana','pear']

for(const index in fruits){
    console.info(`index ke ${index} : ${fruits[index]}`)
}
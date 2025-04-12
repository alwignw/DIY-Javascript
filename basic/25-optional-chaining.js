/*
Optional chaining operator (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property
sebuah object dari data nullish
Jika kita mencoba mengakses property dari sebuah object dari data nullish tanpa menggunakan optional
chaining operator, maka akan terjadi error
 */

const visual = [{color :'red'}]

console.info(visual[0]?.color)

const visualiZation = [{
    color :{
            background :'red',
        }
    }]

console.info(visualiZation[0]?.color?.background)
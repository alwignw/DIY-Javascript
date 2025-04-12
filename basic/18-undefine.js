/*
undefined adalah sebuah kata kunci di JavaScript
undefined adalah sebuah tipe data
Sebuah variable yang belum ditambahkan nilai, maka artinya variable tersebut merupakan tipe undefined
Kadang untuk programmer JavaScript pemula undefined ini memang agak sedikit membingungkan
undefined itu berbeda dengan null di bahasa pemrograman lain
 */

let name
if(name === undefined){
    console.info(name)
}else{
    console.info('define')
}

//undefine array value
const array = ['1' , '2']
if(array[2] === undefined){
    console.info('undefined')
}else{
    console.info('define')
}
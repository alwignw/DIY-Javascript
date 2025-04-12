/*
null merupakan representasi data kosong
null berbeda dengan undefined, null berarti variable sudah ditambahkan value nya, hanya saja value nya null
Sedangkan undefined adalah variable belum ditambahkan value apapun
 */

const value = null

if(value === undefined){
    console.info('undefined')
}
else if(value === null){
    console.info('null')
}else{
    console.info('define')
}
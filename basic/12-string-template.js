//kita tau untuk menambahkan string kita bisa menggunakan operatur +
//nammun pada kasus tertentu operator + sangat menyulitkan apa lgi jumlah datanya bnyak
//js memiliki feature string template, dimana kita bisa mensubsitusi data dari luar string kedalam string
//cara menggunakannya kita harus menggunakan backtick(`)

const name = "alwi gunawan"
const template = `Name : ${name}`

console.info(template)

//expresion di string template

const siswa = "awiem"
const value = 80;

const kelulusan = `Name : ${siswa}, Lulus : ${value > 70}`
console.info(kelulusan);

//multiline string

let multilineString = `
indonesia tanah air beta
pusaka abadi nanjaya
indonesia sejak dulu kala
tetap di puja-puja bangsa 
`

console.info(multilineString)
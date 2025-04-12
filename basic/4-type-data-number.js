//js hanya mendukung 1 tipe data number, tipe data tsb bisa berupa bilangan bulat / decimal

/*tipe seperti di bahasa pemograman lain yang biasaanya membedakan tipe data number bilangan bulat
dan bilangan decimal, di js semuanya di satukan
* */


const bil_bulat = 10;
const bil_decimal = 10.10;
console.info(bil_bulat , bil_decimal);

//-Number notation
//js mendukung number notation, defaultnya ada basis 10, jsnya mendukung binary, hexa, dan octal
//Hexadecimal : 0xFF
//binary :0b10101
//octal : 0o10

const binary = 0b1111010
const hexa = 0xFF
const octal = 0o10

console.info(binary , hexa , octal);
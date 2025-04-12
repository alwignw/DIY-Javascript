//saat membuat aplikasi, kada kita input dari pengguna slalu dalam bentuk string
//sedangkan kita ingin mengelola datanya dalam bentuk number
//maka kita harus menggunakan conversi tipe data

//problem tanpa conversi
let value1 = "1"
let value2 = 1 ;
let result = value1 +  value2
console.info(result);

//melakukan conveersi string dan number

//parseInt(string) -> dari string ke number (bil bulat)

//parseFloat(string) -> dari string ke number (bil pecahan)

//Number(string) -> dari string ke number (bil bulat atau bil pecahan)

//number.toString() -> dari number ke string

 result = parseInt(value1) + value2;
 console.info("parseInt : " + result)

result = parseFloat(value1+".1") + value2;
console.info("parseFloat : " + result)

result = Number(value1+".1") + value2;
console.info("Numbeer : " + result)

value1 = 20
result =  value1.toString() + value2;
console.info(result);

//di dalam sebuah number itu ada number uniq yaitu NaN (not a number)
//ini terjadi ketika kita melakukan conversi data yang tidak valid
//nan adalah nummber spesial yang menyebutkan bahwa ini bukanlah number
//jika nan dioperasikan dengan data number lainnya, maka hasilnya akan tetep nan

console.log(parseInt("alwi1"))
console.log(parseInt("alwi1") + 2)

//isNaN() function
//untuk mengecek apakah sebuha number nan atau bukan
//hasilnya akan berupa data boolea, true jika NaN, false jika Bukan nan

let value3= parseInt("alwi1");
console.log(isNaN(value3));
console.log(isNaN(100));
console.log(isNaN(NaN));




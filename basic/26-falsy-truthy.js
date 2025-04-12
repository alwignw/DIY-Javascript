//falsy
/*
Falsy atau kadang ditulis falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false
Ini adalah salah satu fitur unik dari JavaScript, yang berguna, namun kadang juga sering membingungkan
Jadi di JavaScript, kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa, namun kita harus
tahu beberapa data falsy, atau dianggap false
 */

//data falsy
//fasle -> boolean false
//0, -0 -> number 0 dan -0 dianggap false
//"",'',`` -> smua string kosong di anggap false
//null -> dianggap false
//undefined -> dianggap false
//NaN -> dianggap false


//truthy
/*
Truthy adalah kebalikan dari falsy, dimana data nya dianggap bernilai true
Sederhana sekali sebenarnya untuk mengetahui sebuah data itu adalah truthy, yaitu data yang bukan bernilai falsy
 */

let data =""

if(data){
    console.info("truthy")
}else{
    console.info("falsy")
}
/*
Closure adalah kombinasi function dan bundel referensi ke data disekitarnya.
Oke agak membingungkan memang, apalagi untuk yang baru pertama belajar
Kita sudah tahu bahwa local scope tidak bisa diakses di luar scope nya
Dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar scope nya
 */


function Perkalian(value){
    const pemilik = "alwi"
    function kali(param) {
            console.info(pemilik)
        return value * param
        }
     return kali
}

const kali = Perkalian(2)
console.info(kali(10))
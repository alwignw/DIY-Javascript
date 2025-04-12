/*
static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasannya ketika kita membuat field atau method
,maka secara otomatis field akan menjadi property di instance object, dan method akan menjadi function di prototype
Jika kita tambahkan static, maka hal itu tidak terjadi

 */

/*
Jika kita tambahkan static dalam class field, secara otomatis field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri
Biasanya static digunakan jika kita ingin membuat utility field atau function
Cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya
Static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama

 */

class  configuration{
    static belajar = 'Java script'
    static author = 'Alwi gunawan'
}

const config = new configuration();
console.info(config)

console.info(configuration.belajar)
console.info(configuration.author)

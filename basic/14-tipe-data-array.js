//array adalah tipe data yang berisikan kummpulan data
//array di js bersifat dinammis, datanyanya bisa bertambah sendirinya ketika kita melakukan data ke dalam array

let arrayKosong = [];

let arrayNama = ["indonesia", "bisa"]

//cara kerja array
//setiap data di array posisi berurutan, dimana urutan peertama di mulai dari nomor 0
//setiap kita menambahkan array otomatis datanya akan di simpan ke urutan terakhhir
//urutan di array biasanya kita sebut index

let negara = ['indonesia']
negara.push('jepang')
negara.push('kanada')
negara.push('singapore' , 'malaysia')
console.log(negara)

//operasi di array
//array.push(value) -> menambah data ke dalam array
//array.length -> untuk mendapatkan panjang array
//array[index] -> mendapatkan data di posisi index
//array[index] = value -> mengubah data di posisi index
//delete array[index] -> mmenghapus data di posisi index, nammun index tidak bergeser

//perlu diingat
//data dalam array tidak ada batasannya harus data apa
//kita juga bisa memasukan array ke dalam array
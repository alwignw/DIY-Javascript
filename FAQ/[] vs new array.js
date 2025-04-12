//Dalam JavaScript, [] adalah cara singkat untuk membuat sebuah array kosong, 
//sedangkan new Array() adalah cara lain untuk membuat sebuah array kosong.

//Namun, perbedaan penting antara keduanya adalah cara mereka memperlakukan argumen yang diberikan saat membuat array dengan elemen awal. 
//Saat menggunakan [], Anda dapat langsung menentukan elemen-elemen awal array seperti berikut:

let arr1 = [1, 2, 3]; // membuat array dengan elemen awal 1, 2, dan 3

//Namun, saat menggunakan new Array(), 
//Anda harus menentukan jumlah elemen awal yang ingin Anda buat dan elemen-elemen tersebut akan diisi dengan undefined secara default, 
//seperti berikut:

let arr2 = new Array(3); // membuat array dengan 3 elemen, diisi dengan undefined

//Anda juga dapat menentukan elemen awal menggunakan sintaks new Array() 
//dengan memberikan argumen yang berisi nilai elemen awal dalam bentuk array, seperti berikut:

let arr3 = new Array(1, 2, 3); // membuat array dengan elemen awal 1, 2, dan 3


//Ketika membuat array dengan jumlah elemen awal yang besar, 
//new Array() lebih efisien karena hanya mengalokasikan ruang yang cukup untuk elemen-elemen tersebut,
//sedangkan [] akan mengalokasikan memori berlebih yang mungkin tidak pernah terpakai. 
//Namun, dalam kasus kebanyakan, keduanya dapat digunakan secara bergantian dan hasilnya akan sama.

Callback, merupakan mekanisme untuk memanggil kembali kode yang ada di program dari proses Async
Callback biasanya dibuat dalam bentuk function as parameter, dan parameter function tersebut akan dieksekusi saat proses Async selesai
Dengan menggunakan Callback, program bisa menerima informasi yang dibutuhkan dari proses yang berjalan secara Async



--------------------------------

Dalam konteks JavaScript, callback adalah sebuah fungsi yang diberikan sebagai argumen kepada fungsi lain. Fungsi yang menerima callback akan memanggil fungsi tersebut pada titik tertentu dalam eksekusinya.

Penggunaan callback sangat umum dalam pemrograman JavaScript, terutama dalam situasi di mana operasi yang dilakukan adalah operasi asinkron. Dalam operasi asinkron, pemanggilan fungsi tidak akan secara langsung mengembalikan hasil yang diinginkan. Sebaliknya, sebuah callback dapat digunakan untuk menentukan tindakan apa yang harus dilakukan setelah operasi asinkron selesai.

Contoh penggunaan callback dalam JavaScript:

```javascript
function processAsyncData(data, callback) {
  // Operasi asinkron yang membutuhkan waktu
  // Setelah selesai, panggil callback dengan hasil data
  setTimeout(function() {
    const processedData = data.toUpperCase();
    callback(processedData);
  }, 2000);
}

function handleResult(result) {
  console.log("Hasil:", result);
}

const input = "Hello, world!";

processAsyncData(input, handleResult);
console.log("Setelah memanggil processAsyncData");
```

Dalam contoh di atas, terdapat fungsi `processAsyncData` yang melakukan operasi asinkron dan menerima sebuah callback sebagai argumen kedua. Setelah operasi asinkron selesai, fungsi `callback` dipanggil dengan hasil data yang diproses.

Kemudian, terdapat fungsi `handleResult` yang berfungsi sebagai callback yang akan dipanggil ketika operasi asinkron selesai. Fungsi ini akan mencetak hasil data yang diterima.

Pada bagian terakhir, kita memanggil `processAsyncData` dengan memberikan input dan callback `handleResult`. Setelah itu, program akan melanjutkan eksekusi ke baris berikutnya (`console.log("Setelah memanggil processAsyncData")`) tanpa harus menunggu operasi asinkron selesai. Hasilnya akan dicetak setelah operasi asinkron selesai dijalankan.

Dengan menggunakan callback, kita dapat menentukan tindakan yang akan dilakukan setelah operasi asinkron selesai, sehingga memungkinkan pemrograman yang lebih fleksibel dalam penanganan operasi yang membutuhkan waktu.
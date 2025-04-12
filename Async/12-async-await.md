Async/await adalah fitur JavaScript yang diperkenalkan dalam ECMAScript 2017 (ES2017) yang memudahkan penanganan operasi asinkron dengan cara yang lebih terstruktur dan mirip dengan gaya penulisan kode sinkron.

Berikut adalah penjelasan singkat tentang async/await:

1. `async`: Kata kunci `async` digunakan sebelum deklarasi fungsi untuk menunjukkan bahwa fungsi tersebut adalah sebuah fungsi asinkron. Fungsi asinkron dapat berisi ekspresi `await` yang menunggu hingga sebuah Promise terpenuhi sebelum melanjutkan eksekusi.

2. `await`: Kata kunci `await` digunakan dalam fungsi asinkron untuk menunggu hingga sebuah Promise selesai dan mengembalikan hasilnya. Penggunaan `await` harus di dalam blok `async`. Ketika `await` digunakan, eksekusi fungsi asinkron akan berhenti sementara sampai Promise terpenuhi, dan hasil dari Promise akan dijadikan nilai yang dikembalikan.

Berikut adalah contoh penggunaan async/await:

```javascript
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data berhasil diambil');
    }, 2000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result); // Output: Data berhasil diambil
  } catch (error) {
    console.error(error);
  }
}

getData();
```

Dalam contoh di atas, `fetchData()` adalah sebuah fungsi yang mengembalikan Promise yang terpenuhi setelah jeda 2 detik. Fungsi `getData()` merupakan fungsi asinkron yang menggunakan kata kunci `async`. Di dalamnya, kita menggunakan `await` untuk menunggu hingga Promise dari `fetchData()` terpenuhi. Setelah Promise terpenuhi, nilai yang dikembalikan oleh Promise tersebut akan ditetapkan ke variabel `result`, dan kita dapat melakukan manipulasi lebih lanjut terhadap nilai tersebut.

Penting untuk dicatat bahwa penggunaan `await` hanya dapat dilakukan di dalam fungsi yang dideklarasikan sebagai `async`. Fungsi asinkron akan selalu mengembalikan sebuah Promise, yang dapat kita tangani menggunakan `.then()` dan `.catch()` seperti Promise biasa.

Async/await mempermudah penulisan kode asinkron dengan menghindari callback hell dan membuat aliran kode menjadi lebih linier dan mudah dibaca. Ini memberikan cara yang lebih elegan dan terstruktur untuk menangani operasi asinkron di JavaScript.
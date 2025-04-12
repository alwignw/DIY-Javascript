Fetch API adalah API built-in di JavaScript yang menyediakan antarmuka untuk melakukan permintaan HTTP secara asinkron. Dengan Fetch API, kita dapat mengambil, mengirim, dan memanipulasi data melalui jaringan.

Berikut adalah penjelasan singkat tentang penggunaan Fetch API:

1. Mengirim permintaan GET:
   ```javascript
   fetch('https://api.example.com/data')
     .then(response => response.json())
     .then(data => {
       // Melakukan sesuatu dengan data yang diterima
       console.log(data);
     })
     .catch(error => {
       // Menangani kesalahan jika terjadi
       console.error(error);
     });
   ```
   Dalam contoh di atas, kita menggunakan fungsi `fetch()` untuk mengirim permintaan GET ke URL yang ditentukan. Setelah permintaan berhasil, kita menggunakan metode `.json()` pada objek response untuk mengonversi respons menjadi objek JavaScript. Kemudian, kita dapat melakukan manipulasi atau penggunaan lebih lanjut terhadap data yang diterima.

2. Mengirim permintaan POST:
   ```javascript
   const dataToSend = {
     username: 'john_doe',
     password: 'secret'
   };

   fetch('https://api.example.com/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(dataToSend)
   })
     .then(response => response.json())
     .then(data => {
       // Melakukan sesuatu dengan data yang diterima setelah login
       console.log(data);
     })
     .catch(error => {
       // Menangani kesalahan jika terjadi
       console.error(error);
     });
   ```
   Dalam contoh ini, kita menggunakan metode `fetch()` untuk mengirim permintaan POST ke URL login dengan data pengguna yang dikirimkan dalam bentuk objek JSON. Di sini, kita juga menentukan header `'Content-Type': 'application/json'` dan mengonversi objek `dataToSend` menjadi string JSON dengan menggunakan `JSON.stringify()`.

3. Menangani respons HTTP:
   Objek respons yang diterima dari `fetch()` memiliki beberapa properti yang berguna seperti `status` (kode status HTTP), `ok` (true jika respons berhasil), `headers` (header respons), dan lain-lain. Kita dapat menggunakan properti ini untuk menangani respons HTTP secara tepat.

   ```javascript
   fetch('https://api.example.com/data')
     .then(response => {
       if (response.ok) {
         return response.json();
       } else {
         throw new Error('Terjadi kesalahan: ' + response.status);
       }
     })
     .then(data => {
       // Melakukan sesuatu dengan data yang diterima
       console.log(data);
     })
     .catch(error => {
       // Menangani kesalahan jika terjadi
       console.error(error);
     });
   ```
   Dalam contoh ini, kita mengecek apakah respons berhasil dengan menggunakan properti `ok`. Jika respons berhasil, kita mengonversi respons menjadi objek JSON menggunakan `.json()`. Jika respons tidak berhasil, kita melempar error dengan menyertakan status respons.

Fetch API juga mendukung pengaturan header, menggunakan metode HTTP lainnya seperti PUT atau DELETE, mengirim data dalam format FormData, dan lain-lain. API ini memberikan fleksibilitas dan kontrol yang lebih besar dalam melakukan permintaan HTTP dan memanipulasi responsnya.



Perlu diingat bahwa Fetch API hanya mendukung permintaan HTTP dan HTTPS, dan ada beberapa perbedaan antara Fetch API dan XMLHTTPRequest.

----------------------------------------------------------------
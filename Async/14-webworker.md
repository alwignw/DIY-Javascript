Web Worker adalah kemampuan yang untuk menjalankan proses di Thread yang berbeda dibanding Main Thread. 
Keuntungan menggunakan Web Worker adalah, jika terdapat proses yang membutuhkan waktu lama, Web kita tidak akan Freeze, karena proses tersebut bisa kita jalankan di Thread yang berbeda dari Main Thread (yang biasa digunakan oleh UI)
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API 




--------------------------------

Web Worker adalah fitur di JavaScript yang memungkinkan kita untuk menjalankan skrip JavaScript di latar belakang (background thread) secara terpisah dari utas utama (main thread) yang menjalankan kode JavaScript di halaman web utama.

Berikut adalah beberapa poin penting tentang Web Worker:

1. Pemisahan Utas: Web Worker memungkinkan pemisahan tugas yang intensif atau berat dari utas utama sehingga tidak mengganggu responsivitas antarmuka pengguna (UI) utama.

2. Skrip JavaScript Terpisah: Web Worker menggunakan file JavaScript terpisah (biasanya dengan ekstensi `.js`) yang berisi kode yang akan dijalankan di latar belakang.

3. Tidak Ada Akses Langsung ke DOM: Web Worker tidak memiliki akses langsung ke DOM atau API yang terkait dengan tampilan halaman web utama. Ini berarti kita tidak dapat memanipulasi elemen DOM atau memanggil metode seperti `alert()` atau `console.log()` dari dalam Web Worker. Web Worker berfokus pada komputasi terpisah dan komunikasi dengan utas utama melalui mekanisme pesan.

4. Komunikasi dengan Utas Utama: Web Worker dapat berkomunikasi dengan utas utama melalui mekanisme pesan, yang memungkinkan pertukaran data dan instruksi antara utas utama dan Web Worker.

Berikut adalah contoh sederhana penggunaan Web Worker:

**main.js:**
```javascript
const worker = new Worker('worker.js');

worker.onmessage = function(event) {
  console.log('Diterima dari Web Worker:', event.data);
};

worker.postMessage('Halo dari utas utama!');
```

**worker.js:**
```javascript
self.onmessage = function(event) {
  console.log('Diterima dari utas utama:', event.data);
  const pesanBalasan = 'Halo dari Web Worker!';
  self.postMessage(pesanBalasan);
};
```

Dalam contoh di atas, kita membuat sebuah Web Worker dengan menggunakan objek `Worker` dan memberikan file JavaScript terpisah `worker.js` sebagai argumen. Kemudian, kita menetapkan fungsi `onmessage` pada Web Worker untuk menangani pesan yang diterima dari utas utama.

Di sisi Web Worker (`worker.js`), kita menggunakan `self.onmessage` untuk menangani pesan yang diterima dari utas utama. Kami juga menggunakan `self.postMessage` untuk mengirim pesan balasan kembali ke utas utama.

Web Worker dapat digunakan untuk menjalankan tugas yang membutuhkan komputasi intensif atau tugas jangka panjang tanpa menghalangi utas utama dan membuat antarmuka pengguna tetap responsif. Ini adalah alat yang berguna dalam pengembangan aplikasi web yang kompleks dengan persyaratan kinerja tinggi.
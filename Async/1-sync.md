what is synchronous ?
program javascript secara default akan running baris per baris
proses synchronous juga bisa di sebut blocking, karna harus menunggu tiap proses selesai , baru next proses


Synchronous (sinkron) mengacu pada tipe eksekusi atau operasi di mana tugas atau tindakan dilakukan satu demi satu secara berurutan. Dalam proses sinkron, setiap tugas menunggu penyelesaian tugas sebelumnya sebelum dapat dimulai.

Dalam pemrograman, operasi sinkron memblokir eksekusi program sampai tugas tertentu selesai. Ini berarti program akan berhenti dan menunggu respons atau hasil sebelum melanjutkan ke baris kode berikutnya.

Sebagai contoh, dalam kode JavaScript sinkron, jika ada pemanggilan fungsi yang membutuhkan waktu lama untuk selesai, seluruh eksekusi program akan diblokir sampai fungsi itu mengembalikan hasil. Ini dapat menyebabkan kinerja keseluruhan menjadi lebih lambat, terutama jika terdapat beberapa operasi sinkron yang perlu dieksekusi.

Di sisi lain, operasi asinkron memungkinkan tugas dilakukan secara bersamaan atau independen tanpa memblokir eksekusi program. Pemrograman asinkron sering digunakan saat berurusan dengan tugas yang membutuhkan waktu lama, seperti permintaan jaringan atau operasi file, di mana lebih efisien untuk memulai tugas dan melanjutkan operasi lain sambil menunggu tugas selesai.

Secara ringkas, operasi sinkron dieksekusi satu per satu, memblokir eksekusi program sampai setiap tugas selesai, sedangkan operasi asinkron memungkinkan tugas dilakukan secara bersamaan, memungkinkan penggunaan sumber daya yang lebih baik dan potensial meningkatkan kinerja keseluruhan program.


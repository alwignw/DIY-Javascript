Promise adalah konsep yang digunakan dalam JavaScript untuk mengelola eksekusi asinkron. Sebuah promise mewakili nilai yang mungkin belum tersedia pada saat operasi asinkron sedang berjalan, namun akan tersedia di masa yang akan datang.

Secara umum, sebuah promise memiliki tiga status yang mungkin: "pending" (sedang menunggu), "fulfilled" (terpenuhi), atau "rejected" (ditolak). Ketika sebuah promise masih dalam status "pending", itu berarti operasi asinkron yang terkait dengan promise tersebut masih berjalan. Ketika operasi asinkron selesai, promise akan berubah menjadi status "fulfilled" jika berhasil atau "rejected" jika terjadi kesalahan.

Promise biasanya digunakan dalam kode asinkron untuk menghindari callback hell (bertingkat) dan memungkinkan penanganan kesalahan yang lebih baik. Dengan promise, kita dapat menggunakan metode .then() untuk menangani nilai yang terpenuhi (fulfilled) dan metode .catch() untuk menangani kesalahan (rejected) yang terjadi dalam operasi asinkron.

----------------------------------------------------------------

Ada beberapa metode penting yang terkait dengan objek Promise. Berikut adalah penjelasan singkat tentang beberapa metode utama yang sering digunakan dalam pengelolaan Promise di JavaScript:

1.Promise.then(): Metode ini digunakan untuk menetapkan tindakan yang akan diambil ketika promise terpenuhi (fulfilled). Metode ini menerima satu atau dua argumen: fungsi callback yang akan dijalankan ketika promise terpenuhi, dan fungsi callback untuk menangani penolakan (rejection) jika diberikan.

2.Promise.catch(): Metode ini digunakan untuk menetapkan tindakan yang akan diambil ketika promise ditolak (rejected). Metode ini menerima fungsi callback yang akan dijalankan ketika promise ditolak.

3.Promise.finally(): Metode ini digunakan untuk menetapkan tindakan yang akan diambil setelah promise selesai, baik terpenuhi (fulfilled) atau ditolak (rejected). Metode ini menerima fungsi callback yang akan dijalankan tanpa memperhatikan status promise.

----------------------------------------------------------------

`Promise.all()`: Metode ini mengembalikan Promise baru yang menunggu hingga semua Promise dalam array yang diberikan terpenuhi (fulfilled) atau salah satunya ditolak (rejected). Hasilnya akan berupa array yang berisi nilai dari Promise yang terpenuhi dalam urutan yang sesuai dengan urutan dalam array input.
example : 
    const promise1 = Promise.resolve('Nilai 1');
    const promise2 = Promise.resolve('Nilai 2');
    const promise3 = Promise.resolve('Nilai 3');

    Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // Output: ['Nilai 1', 'Nilai 2', 'Nilai 3']
    }); 


`Promise.race()`: Metode ini mengembalikan Promise baru yang menunggu hingga salah satu dari beberapa Promise dalam array yang diberikan terpenuhi (fulfilled) atau ditolak (rejected). Hasilnya akan mengikuti hasil dari Promise pertama yang selesai, baik itu terpenuhi atau ditolak.
example : 
    const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Nilai 1'));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Nilai 2'));
    Promise.race([promise1, promise2])
    .then(value => {
        console.log(value); // Output: Nilai 1
    });



`Promise.any()` adalah sebuah metode statis pada objek Promise yang mengembalikan sebuah Promise yang terpenuhi (fulfilled) jika minimal satu Promise dalam array yang diberikan terpenuhi, atau akan ditolak (rejected) jika semua Promise dalam array tersebut ditolak.

Berikut adalah contoh penggunaan Promise.any():

const promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Alasan penolakan 1'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Nilai 2'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Nilai 3'));

Promise.any([promise1, promise2, promise3])
  .then(value => {
    console.log(value); // Output: Nilai 2
  })
  .catch(errors => {
    console.error(errors); // Tidak akan dijalankan pada contoh ini
  });



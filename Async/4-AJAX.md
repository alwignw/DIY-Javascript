AJAX singkatan dari Asynchronous JavaScript and XML
AJAX biasanya digunakan untuk mengambil atau mengirim data ke URL lain
Untuk membuat AJAX, kita bisa menggunakan class XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest 


----------------------------------------------------
menerima data ajax
AJAX biasanya digunakan untuk mengirim data ke Server atau menerima data dari Server
Tiap request AJAX yang dilakukan, biasanya kita ingin mendapat informasi response yang diberikan oleh Server
Kita tidak bisa langsung mengambil response AJAX, karena proses AJAX adalah Async, sehingga kita perlu menunggu sampai proses Async nya selesai.
Untuk mendapatkan informasi AJAX, kita bisa menggunakan AJAX Callback, yang akan dieksekusi setelah proses AJAX selesai
Untuk menambahkan AJAX Callback, kita bisa tambahkan pada event load
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event 
Dan untuk mengambil datanya dari server, kita bisa menggunakan property responseText

----------------------------------------------------------------

response status 
AJAX adalah proses komunikasi Client dan Server
Dalam komunikasi Client dan Server, kita tidak bisa selalu menganggap proses tersebut akan berjalan lancar.
Akan ada banyak hal-hal yang bisa mengganggu proses AJAX yang bisa menyebabkan error, seperti; koneksi internet bermasalah, error dari server, data dari client tidak valid, dan lain-lain.
Server biasanya akan mengirimkan HTTP Status Code yang sesuai dengan jenis response nya, seperti yang sudah dibahas di materi HTTP
Untuk mengetahui status response dari Server, kita bisa menggunakan property status
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status 

--------------------------------
State di AJAX
AJAX memiliki tahapan state, dimana kita bisa mendapatkan banyak sekali state di Ajax menggunakan property readyState
Property readyState mengembalikan nilai number, dimana tiap number merupakan representasi dari statenya

Jika kita ingin mendengarkan perubahan yang terjadi pada state, kita bisa menggunakan event readystatechange
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange 

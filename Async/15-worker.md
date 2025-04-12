Untuk menggunakan Web Worker API, kita bisa membuat object Worker
https://developer.mozilla.org/en-US/docs/Web/API/Worker 
Saat kita membuat object Worker, Worker tidak akan secara otomatis berjalan, melainkan kita perlu memberi perintah dengan cara mengirim pesan
Untuk mengirim pesan, kita bisa gunakan method postMessage()
Sedangkan untuk menerima balasan dari worker, kita bisa menggunakan event listener onmessage
Data yang diterima adalah object MessageEvent
https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent 

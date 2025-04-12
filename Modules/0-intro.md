JavaScript modules adalah cara untuk membagi dan mengatur kode JavaScript menjadi unit terpisah yang dapat digunakan kembali dalam aplikasi yang lebih besar. Modul memungkinkan kita untuk mengimpor dan mengekspor fungsi, variabel, atau objek antara berkas JavaScript yang berbeda, sehingga memungkinkan pemisahan logika program menjadi bagian yang lebih terorganisir.

Ada dua jenis modul yang dapat digunakan dalam JavaScript: modul biasa (CommonJS) dan modul ES (ECMAScript). Dalam konteks ini, kita akan fokus pada modul ES, yang merupakan standar baru dalam JavaScript yang diperkenalkan dalam ECMAScript 2015 (ES6).

Dalam modul ES, kita dapat menggunakan kata kunci `import` untuk mengimpor fungsi, variabel, atau objek dari modul lain, dan kata kunci `export` untuk mengekspor fungsi, variabel, atau objek dari modul saat kita ingin menggunakannya di modul lain.

Contoh penggunaan modul ES:

**modul1.js**
```javascript
export function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

export const PI = 3.14;
```

**modul2.js**
```javascript
import { sayHello, PI } from './modul1.js';

sayHello('John'); // Output: Hello, John!
console.log(PI); // Output: 3.14
```

Dalam contoh di atas, kita membuat modul1.js yang mengekspor fungsi `sayHello` dan konstanta `PI`. Kemudian, di modul2.js, kita mengimpor fungsi `sayHello` dan konstanta `PI` dari modul1.js dan menggunakannya di sana.

Selain itu, ada juga fitur lain dalam modul ES seperti `default exports`, yang memungkinkan kita mengekspor satu nilai default dari modul, dan `named exports`, yang memungkinkan kita mengekspor beberapa nilai dengan nama yang berbeda.

Penggunaan modul memungkinkan kita untuk mengorganisir dan memisahkan kode menjadi unit yang lebih terkelola, memungkinkan kode yang lebih modular, mengurangi konflik nama, dan mendorong penggunaan kembali kode yang efisien dalam aplikasi JavaScript yang lebih besar.
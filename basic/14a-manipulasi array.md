Manipulasi array adalah suatu proses di mana kita mengubah, menambahkan, menghapus, atau melakukan operasi lainnya pada elemen-elemen dalam sebuah array menggunakan JavaScript. Berikut adalah beberapa operasi manipulasi array yang umum dilakukan:

1. Menambahkan elemen baru ke array:
```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.push('mango'); // Menambahkan 'mango' ke akhir array
fruits.unshift('grape'); // Menambahkan 'grape' di awal array
```

2. Menghapus elemen dari array:
```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.pop(); // Menghapus elemen terakhir dari array ('orange')
fruits.shift(); // Menghapus elemen pertama dari array ('apple')
```

3. Mengakses elemen dalam array:
```javascript
const fruits = ['apple', 'banana', 'orange'];
const firstFruit = fruits[0]; // Mengakses elemen pertama dalam array ('apple')
const lastFruit = fruits[fruits.length - 1]; // Mengakses elemen terakhir dalam array ('orange')
```

4. Mengubah elemen dalam array:
```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits[1] = 'grape'; // Mengubah elemen kedua dalam array menjadi 'grape'
```

5. Menggabungkan dua array:
```javascript
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'mango'];
const combinedArray = fruits.concat(moreFruits); // Menggabungkan dua array menjadi satu array ['apple', 'banana', 'orange', 'mango']
```

6. Menghapus elemen di tengah array:
```javascript
const fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.splice(1, 2); // Menghapus dua elemen mulai dari indeks ke-1 ('banana', 'orange')
```

7. Menerapkan operasi pada setiap elemen array:
```javascript
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(function(num) {
  return num * 2;
}); // Menggandakan setiap elemen dalam array [2, 4, 6, 8]
```

Tentu saja, ini hanya beberapa contoh operasi manipulasi array yang umum digunakan. JavaScript menyediakan banyak metode dan teknik lain untuk memanipulasi dan mengubah array sesuai kebutuhan Anda.
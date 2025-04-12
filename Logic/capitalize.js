function capitalize(str) {
    // Split string menjadi array kata-kata
    const words = str.split(' ');
  
    // Loop melalui setiap kata
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      // Mengubah huruf pertama kata menjadi huruf besar dan menyambungkan kembali ke array
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    // Menggabungkan array kata-kata kembali menjadi string
    return words.join(' ');
  }


  console.log(capitalize('hello world')); // "Hello World"
console.log(capitalize('JavaScript is awesome')); // "JavaScript Is Awesome"
console.log(capitalize('capitalize me please')); // "Capitalize Me Please"
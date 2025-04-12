function countVowels(str) {
    // Mengonversi string menjadi lowercase untuk mempermudah perbandingan
    str = str.toLowerCase();
  
    // Inisialisasi variabel count dengan nilai 0
    let count = 0;
  
    // Loop melalui setiap karakter di string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Mengecek apakah karakter adalah huruf hidup (a, e, i, o, u)
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
      }
    }
  
    return count;
  }

console.log(countVowels('hello world')); 
console.log(countVowels('JavaScript is awesome')); 
console.log(countVowels('qwrtypsdfghjklzxcvbnm')); 
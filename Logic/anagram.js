function isAnagram(str1, str2) {
    // Mengonversi kedua string menjadi lowercase untuk mempermudah perbandingan
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
    // Menghapus spasi dan karakter non-alphanumerik dari kedua string
    str1 = str1.replace(/[^a-z0-9]/g, '');
    str2 = str2.replace(/[^a-z0-9]/g, '');
  
    // Mengecek apakah kedua string memiliki jumlah karakter yang sama
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Menghitung jumlah kemunculan setiap karakter di kedua string
    const charCount = {};
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      if (char in charCount) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Membandingkan jumlah kemunculan setiap karakter di kedua string
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      if (char in charCount && charCount[char] > 0) {
        charCount[char]--;
      } else {
        return false;
      }
    }
  
    return true;
  }

  console.log(isAnagram('silent', 'listen')); 
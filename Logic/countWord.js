

const p  = 'aku anak sehat'

console.log(p.split(" ").length)

function countWords(str) {
    // Menghapus spasi di awal dan akhir string
    str = str.trim();
  
    // Jika string kosong, jumlah kata adalah 0
    if (str === '') {
      return 0;
    }
  
    // Menghitung jumlah spasi di string
    const spaceCount = (str.match(/ /g) || []).length;
  
    // Jumlah kata adalah jumlah spasi ditambah 1
    return spaceCount + 1;
  }
  console.log(countWords(p)); // 
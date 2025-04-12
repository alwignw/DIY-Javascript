/*
Getter dan Setter adalah kemampuan membuat function yang berbeda untuk
mengambil data (Getter) dan mengubah data (Setter) pada sebuah property di Object
Dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun dalam
function sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain-lain
 */

const sticker ={
    name : "RRQ",
    afirmasi : "jaya jaya jaya",
    get join(){
        return `${this.name} ${this.afirmasi}`
    },
    set stickerEsport(value){
      const tmp = value.split(" ")
      this.name = tmp.shift()
      this.afirmasi= tmp.toString().replace(/,/g," ")
    }
}

console.info(sticker.join)
sticker.stickerEsport = "Evos Roar"
console.info(sticker.join)
sticker.stickerEsport = "Alter Ego go go go"
console.info(sticker.join)
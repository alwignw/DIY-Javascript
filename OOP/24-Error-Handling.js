/*
Saat terjadi error di kode program JavaScript, kadang kita tidak ingin program kita berhenti
Di JavaScript, kita bisa menangkap jika terjadi error
Kita bisa menggunakan try catch statement untuk menangkap error
Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
Jika tidak terjadi error, block catch tidak akan dieksekusi

 */

/*
Kadang kita ingin melakukan sesuatu entah itu terjadi error ataupun tidak
Dalam try catch, kita bisa menambahkan block finally
Block finally ini akan selalu dieksekusi setelah try catch selesai, entah terjadi error atau tidak, block finally akan selalu dieksekusi
 */

class  MathUtil{
    static  sum(...numbers){
        if(numbers.length === 0){
            throw new Error("total parameter harus lebih dari 0")
        }
        let total = 0;
        for(const i of numbers){
            total += i
        }
        return total
    }
}

try {
    console.info(MathUtil.sum())
    console.info("dijalankan")
}
catch (e) {
    console.error("error : " + e.message);
}
finally {
    console.info("program selesai")
}

/*
Kata kunci finally juga bisa digunakan tanpa perlu menggunakan catch
Biasanya ini digunakan dalam kasus tertentu
 */

class  counter{
    #count = 0;


    result(){
        try{
            return this.#count
        }
        finally {
            this.#count++;
        }

    }
}

const count = new counter();

console.info(count.result());
console.info(count.result());
console.info(count.result());
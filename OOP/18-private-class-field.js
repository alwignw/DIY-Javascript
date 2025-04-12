/*
Secara default, saat kita menambahkan field, maka field tersebut bisa diakses dari manapun
Jika kita ingin membuat field yang bersifat private (hanya bisa diakses di dalam class), kita bisa menggunakan tanda # sebelum nama field nya
Ini dinamakan private class field, dan hanya bisa diakses dari dalam class saja

 */

class  counter{
    #count = 0;

    inc(){
         this.#count++;
    }

    dec(){
         this.#count--
    }

    result(){
        return this.#count
    }
}

const count = new counter();

count.inc();
count.inc();
count.inc();
count.dec();

console.info(count.result());
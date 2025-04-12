/*
Sama seperti field, terdapat proposal juga untuk menambah fitur private method di EcmaScript
Dengan demikian, access modifier private juga bisa digunakan di method
Caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private
Ingat fitur ini masih dalam tahapan, belum benar-benar menjadi standard EcmaScript, jadi mungkin tidak semua browser mendukung fitur ini
https://github.com/tc39/proposal-private-methods

 */

class person{
    say(value){
        console.info(`kamu ${this.#getValue(value)}`)
    }

    #getValue(value){
        return value < 75 ? 'Bodoh' : 'Pintar'
    }
}

const orang = new person();

orang.say(70);
orang.say(80);
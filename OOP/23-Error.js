/*
Saat membuat aplikasi, sudah tentu kita tidak akan terhindar dari yang namanya error
Di JavaScript, Error merupakan sesuatu yang sudah standar
Banyak sekali class error di JavaScript, namun semua class error di JavaScript selalu berujung di class Error, artinya class Error adalah superclass untuk semua jenis error di JavaScript
Contoh class error yang terdapat di JavaScript contohnya SyntaxError, TypeError, EvalError, dan lain-lain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types

 */

//throw error
/*
Saat kita membuat instance object dari class Error, tidak lantas otomatis terjadi error
Kita perlu memberitahu program kita, bahwa kita akan mentrigger sebuah error terjadi, atau istilahnya adalah melempar error (throw error)
Untuk melempar error, kita bisa gunakan kata kunci throw, diikuti dengan instance object error nya
Jika terjadi error, maka otomatis kode program kita akan terhenti, dan kita bisa melihat detail errornya di console di aplikasi browser kita

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

console.info(MathUtil.sum(1,2,3,4))
console.info(MathUtil.sum())
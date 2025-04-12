    /*
    Walaupun JavaScript sudah memiliki standard class Error
Namun alangkah baiknya, kita membedakan tiap jenis error
Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error
Dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error

     */


    class validationError extends  Error{
        constructor(message , field) {
            super(message);
            this.field = field
        }
    }

    class  MathUtil{
        static  sum(...numbers){
            if(numbers.length === 0){
                throw new validationError("total parameter harus lebih dari 0" , "numbers")
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
        if(e instanceof validationError){
             console.error(`terjadi error di field ${e.field} : ` + e.message);
        }else{
            console.error(`terjadi error  : ` + e.message);
        }

    }
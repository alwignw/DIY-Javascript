/*
kemampuan sebuah function memanggil function dirinya sendiri
kadang memang ada banyak problem yang lebih mudah di selesaikan menggunakan recursive function
contohnya : kasus factorial
 */

//loop factorial
function factorial(value){
    let result = 1;
    for(let i =1 ; i <= value ; i++){
        result *= i
    }
    return result
}

console.info(factorial(5))

//faction factorial

function  factorial2(value){
    if(value ===1){
        return 1
    }else{

        return value * factorial2(value -1 )
    }
}

//5 * factorial2(4 )
//5 * 4 * factorial2(3)
//5 * 4 * 3 * factorial2(2)
//5 * 4 * 3 * 2 * factorial(1)
//5 * 4 * 3 * 2 * 1

console.info(factorial2(5))


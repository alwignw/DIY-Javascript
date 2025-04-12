//operator logika operator untuk dua buah boolean data
//hasil operator logika yaitu boolean lagi

//& (balikan berupa angka)
//| (balikan berupa angka)
//&& dan (balikan berupa text)
//|| or (balikan berupa text)
//! kebalikan

let value = true && true;
console.info('---operator and---')
console.info(" true &&  true = " + value );

value = true && false;
console.info(" true &&  false = " + value );

value = false && true;
console.info(" false &&  true = " + value );
value = false && false;
console.info(" false &&  false = " + value );

console.info('---operator or---')
value = true || true;
console.info(" true ||  true = " + value );

value = true || false;
console.info(" true || false = " + value );

value = false || true;
console.info(" false ||  true = " + value );
value = false || false;
console.info(" false ||  false = " + value );

console.info('---operator unary ! ---')

value = !false;
console.info("!false = " + value );

value = !true;
console.info("!true = " + value );


const input = "12345"
const number = Number(input)

 console.log(typeof input)
 console.log(typeof number)
 console.log(Number("hihi"))

 console.log(Number.EPSILON)
 console.log(Number.MAX_SAFE_INTEGER)
 console.log(Number.MAX_VALUE)
 console.log(Number.MIN_SAFE_INTEGER)
 console.log(Number.MIN_VALUE)
 console.log(Number.NaN)
 console.log(Number.NEGATIVE_INFINITY)
 console.log(Number.POSITIVE_INFINITY)


 console.log('Number.isFinite(1 / 0)',Number.isFinite(1 / 0));
// expected output: false
console.log('Number.isFinite(10 / 5)',Number.isFinite(10 / 5));
// expected output: true
console.log('Number.isFinite(0 / 0)',Number.isFinite(0 / 0));
// expected output: false


//--
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
  }
  return 'Does NOT fit!';
}
console.log(fits(5, 10));
// expected output: "Fits!"
console.log(fits(5, 11));
// expected output: "Does NOT fit!"

//--
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return 'Number NaN';
  }
  if (isNaN(x)) {
    return 'NaN';
  }
}

console.log(typeOfNaN('100F'));
// expected output: "NaN"
console.log(typeOfNaN(NaN));
// expected output: "Number NaN"

//--
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI ;
}

console.log(circumference('4.567abcdefgh'));
// expected output: 28.695307297889173
console.log(circumference('abcdefgh'));


//--

function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(' 0xF', 16));
// expected output: 1500
console.log(roughScale('321', 2));
// expected output: 0

//--
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456));
// expected output: "123.46"
console.log(financial(0.004));
// expected output: "0.00"
console.log(financial('1.23e+5'));
// expected output: "123000.00"

//--
function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456));
// expected output: "123.5"
console.log(precise(0.004));
// expected output: "0.004000"
console.log(precise(1.23e5));
// expected output: "1.230e+5"

//--
function eArabic(x){
  return x.toLocaleString('ar-EG');
}
console.log(eArabic(123456.789));
// expected output: "١٢٣٬٤٥٦٫٧٨٩"
console.log(eArabic('123456.789'));
// expected output: "123456.789"
console.log(eArabic(NaN));
// expected output: "ليس رقم"


for(int a = 0;a < 10 ;a++){
  if()
}

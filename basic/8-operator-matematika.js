//pertambahan
//pengurangan
//perkalian
//eskponensial (pangkat)
//pembagi
//sisa bagi

let result =1 + 2;
console.info("pertambahan : 1 + 2 = " + result);
let originalResult = result;

result = originalResult - 1;
console.info("pengurangan : "+originalResult+" - 1 = " + result);

result = originalResult * 2;
console.info("perkalian : "+originalResult+" x 2 = " + result);

result = originalResult / 2;
console.info("pembagian : "+originalResult+" x 2 = " + result);


//augmented assignments
let assignments = 1 + 2;
assignments += 2;
console.info('assignments += 2 is ' + assignments);
assignments -= 2;
console.info('assignments -= 2 is ' + assignments);
assignments *= 2;
console.info('assignments *= 2 is ' + assignments);
assignments /= 2;
console.info('assignments /= 2 is ' + assignments);
assignments **= 2;
console.info('assignments **= 2 is ' + assignments);
assignments %= 2;
console.info('assignments %= 2 is ' + assignments);

//unary
let unary = +1;
console.info('+1 = ' + unary);
unary--;
console.info('unary-- = '+ unary);
unary++;
console.info('unary++ = '+ unary);
unary = -unary;
console.info('-1 = '+ unary);


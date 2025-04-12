/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1**2 + 2**2 + 2**2 = 9

assert.strictEqual(squareSum([1,2]), 5);
assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
assert.strictEqual(squareSum([]), 0);
*/


function squareSum(numbers){
    return numbers.length > 0 ? numbers.map(e => e ** 2).reduce((e, a) => e + a) : 0;
}

// squareSum([1,2])
// squareSum([0, 3, 4, 5])
console.log(squareSum([]))



//andorey
const squareSums = numbers => numbers.reduce((a, b)=> a + b**2, 0)

console.log("andorey")
console.log(squareSums([1,2]))
console.log(squareSums([0, 3, 4, 5]))
console.log(squareSums([]))
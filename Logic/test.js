// function countVowels(str) {
//     const vocal = ['a','i','u','e','o'];
//     let i = 0;
//     for(let x of str) {
//        if(vocal.includes(x.toLowerCase())) i++;

//     }
//     return i;
//   }


  
//   // Test Cases
//   console.log(countVowels("Hello")); // Output: 2
//   console.log(countVowels("OpenAI")); // Output: 3
//   console.log(countVowels("JavaScript")); // Output: 3
  


//   function isPalindrome(str) {
//     // Write your code here
//     const valin = [...str].reverse().join().replace(/,/g,"")
    
//     return str === valin 
//   }
  
//   // Test Cases
//   console.log(isPalindrome("level")); // Output: true
//   console.log(isPalindrome("hello")); // Output: false
//   console.log(isPalindrome("racecar")); // Output: true


//   function isPowerOfTwo(number) {
//     // Write your code here
//     return (number / 2 / 2) % 1 == 0 
//   }
  
//   // Test Cases
//   console.log(isPowerOfTwo(1)); // Output: true (2^0 = 1)
//   console.log(isPowerOfTwo(2)); // Output: true (2^1 = 2)
//   console.log(isPowerOfTwo(3)); // Output: false
//   console.log(isPowerOfTwo(32)); // Output: true (2^5 = 32)
//   console.log(isPowerOfTwo(100)); // Output: false
//   console.log(isPowerOfTwo(1024)); // Output: true (2^10 = 1024)
//   console.log(isPowerOfTwo(0)); // Output: false (Powers of two are positive integers)
//   console.log(isPowerOfTwo(-16)); // Output: false (Powers of two are positive integers)


// function findMaxElement(numbers) {
//     // Write your code here
//       const rest = numbers.sort((a,e)=> a - e)[numbers.length -1];
//       return rest
//   }
  
//   // Test Cases
//   console.log(findMaxElement([1, 2, 3, 4, 5])); // Output: 5
//   console.log(findMaxElement([10, 3, 7, 2, 8])); // Output: 10
//   console.log(findMaxElement([-1, -5, -3, -2, -8])); // Output: -1


// function calculateFactorial(number) {
//     // Write your code here
//     let rest  = 1;
//     for(let i=1;  i <= number ; i++){
//       rest *= i;  
//     }
//     return rest;
//   }
  
//   // Test Cases
//   console.log(calculateFactorial(0)); // Output: 1
//   console.log(calculateFactorial(5)); // Output: 120
//   console.log(calculateFactorial(10)); // Output: 3628800

// function isPrimeNumber(number) {
//     // Write your code here
//     if(number < 2) return false
//     let o =0;
//    for(let i=2; i <= Math.sqrt(number); i++){
//         if(number % i == 0) return false;
//    }
//    return true
//   }
  
//   // Test Cases
//   console.log(isPrimeNumber(7)); // Output: true
//   console.log(isPrimeNumber(12)); // Output: false
//   console.log(isPrimeNumber(2)); // Output: true
//   console.log(isPrimeNumber(3)); // Output: true
//   console.log(isPrimeNumber(4)); // Output: false
//   console.log(isPrimeNumber(11)); // Output: true




//   Implement a JavaScript function to remove duplicates from an array.

// function remove_duplicate(array){
//     console.log(array)
//     return  [...new Set(array)]
// }

// console.log(remove_duplicate([1,1,1,2,3,4,5]))


//Implement a JavaScript function to check if two arrays are equal.

// function check_equals(array1 , array2){
//     if(array1.length != array2.length) false;
//     for(var i = 0; i < array1.length; i++){
//         if(array1[i] !== array2[i]){
//             return false
//         }
//     }
//     return true
// }

// console.log(check_equals(['1','2'],[1,2]))


//Write a program to sort an array of numbers in ascending order using JavaScript.

// function descending(a){
//     return a.sort((a,c) => c - a)
// }

// console.log(descending([2,1,6,3]))




function getRandomNumber(min, max) {
    console.log(Math.random() ,(max - min + 1))
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNum = getRandomNumber(1, 90);
console.log(randomNum);
// // Exercise 4: Prime Number Checker
// function isPrime(n) {
//     if (n < 2) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }

//     return true;
// }

// console.log(isPrime(2)); // true
// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false
// console.log(isPrime(1)); // false
// console.log(isPrime(97)); // true

// function generatePrimes(n) {
//     let primes = [];
//     for (let i =2; i <= n; i ++ ){
//         if (isPrime(i)) 
//             primes.push(i)
//     } return primes
// }

// console.log(generatePrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
// console.log(generatePrimes(10)); // [2, 3, 5, 7]

// function countVowels(str) {
//     let count = 0;
//     str = str.toLowerCase();

//     for (let i = 0; i < str.length; i++) { 
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') { 
//             count++;
//         }
//     } return count; 
// }

// console.log(countVowels('hello')); // 2
// console.log(countVowels('AEIOU')); // 5
// console.log(countVowels('xyz')); // 0
// console.log(countVowels('JavaScript')); // 3


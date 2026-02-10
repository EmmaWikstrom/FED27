// EXERCISE 1.1 //

// Write a for loop that:

// 1. Creates an array of the first 10 even numbers (2, 4, 6, 8, ...)
// 2. The calculates the sum of those numbers in a second loop
// 3. Finally, prints the array and the sum

// const evenNumbers = [];

// for (let i = 2; i <= 20; i +=2) {
//     evenNumbers.push(i);
// };

// console.log(evenNumbers);

// let sum = 0; 

// for (const number of evenNumbers) { 
//     sum = sum + number 
// };

// console.log(sum);


// --- EXERCISE 1.2 --- // 

// ### Exercise: While Loop

// Write a while loop that:

// 1. Starts with a number `n = 1`
// 2. Keeps doubling the number until it exceeds 1000
// 3. Counts how many iterations it took
// 4. Finally, prints the final number and the iteration count

let number = 1; 
let iterations = 0; 

while (number <= 1000) {
    number += number; // same as number = number + number
    iterations++;
};

console.log(`Final number: ${number}, Iterations: ${iterations}`);


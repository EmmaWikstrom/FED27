// Write a for loop that:

// 1. Creates an array of the first 10 even numbers (2, 4, 6, 8, ...)
// 2. The calculates the sum of those numbers in a second loop
// 3. Finally, prints the array and the sum

const evenNumbers = [];

for (let i = 2; i <= 20; i +=2) {
    evenNumbers.push(i);
};

console.log(evenNumbers);

let sum = 0; 

for (const number of evenNumbers) { 
    sum = sum + number 
};

console.log(sum);
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

// let number = 1; 
// let iterations = 0; 

// while (number <= 1000) {
//     number += number; // same as number = number + number
//     iterations++;
// };

// console.log(`Final number: ${number}, Iterations: ${iterations}`);

// --- EXERCISE 1.3 --- // 

// ### Exercise: Switch Statement

// Write a switch statement that:

// 1. Takes a variable `day` containing a day of the week (e.g., "Monday")
// 2. Prints whether the day is a "Weekday", "Weekend", or "Invalid day"
// 3. Also prints a custom message for each day (e.g., "Monday - Start of the work week!")
// 4. Test it with at least 3 different day values

function printDay(day) {
    switch (day) {
        case "Monday": 
            console.log("Weekday ");
            console.log("Monday - First day of the week");
            break
        case "Tuesday": 
            console.log("Weekday ");
            console.log("Tuesday - Second day of the week");
            break
        case "Wednesday": 
            console.log("Weekday ");
            console.log("Wednesday - also know as little Saturday");
            break
        case "Thursday": 
            console.log("Weekday ");
            console.log("Thursday - Almost Friday");
            break
        case "Friday": 
            console.log("Weekday ");
            console.log("Friday - TGIF");
            break
        case "Saturday": 
            console.log("Weekend");
            console.log("Saturday - Best day of the weekend")
            break
        case "Sunday": 
            console.log("Weekend");
            console.log("Sunday - Rest and prep for the week ahead")
            break
        default: 
        console.log("Invalid day")
    };

};

printDay("Monday");
printDay("Saturday");
printDay("Sunday");
printDay("Turday");
// ### Exercise: Functional Requirements

// The function must accept three parameters:

// - number1 (a number)
// - number2 (a number)
// - operation (a string)

// Supported operations:

// - "add"
// - "subtract"
// - "multiply"
// - "divide"

// The function must:

// - Perform the correct calculation based on the operation
// - Return the result
// - Return a helpful message if the operation is invalid
// - The function must not prompt the user or use the DOM.
// - All results must be displayed using console.log.

// Example usage:

// ```javascript
// calculate(10, 5, 'add'); // Outputs: 15
// calculate(10, 5, 'subtract'); // Outputs: 5
// calculate(10, 5, 'multiply'); // Outputs: 50
// calculate(10, 5, 'divide'); // Outputs: 2
// calculate(10, 5, 'power'); // Outputs: "Invalid operation"
// ```

// function calculate(number1, number2, operation) {
//     if (operation === 'add') {
//         console.log(number1+number2);
//     } else if (operation === 'subtract') {
//         console.log(number1-number2);
//     } else if (operation === 'multiply') {
//         console.log(number1*number2);
//     } else if (operation === 'divide') {
//         console.log(number1/number2);
//     } else {
//         console.log("Invalid operation");
//     }
// };

// calculate(10, 5, 'add'); // Outputs: 15
// calculate(10, 5, 'subtract'); // Outputs: 5
// calculate(10, 5, 'multiply'); // Outputs: 50
// calculate(10, 5, 'divide'); // Outputs: 2
// calculate(10, 5, 'power'); // Outputs: "Invalid operation"

// *** EXERCISE SOLUTION *** 

// console.log(a);
// console.log(b);
// var a = 1;
// let b = 2;

// Wont run due to variables being declared after they are called. 
// var a is seen as undefined because var is hoisted differently

// **Snippet B:**

// sayHello();
// sayGoodbye();

// function sayHello() {
//     console.log('Hello!');
// }

// var sayGoodbye = function() {
//     console.log('Goodbye!');
// };

//sayHello will run, because it is a function. sayGoodbye will not run as it is a function saved in a variable.

// **Snippet C:**

// var x = 10;

// function foo() {
//     console.log(x);
//     var x = 20;
//     console.log(x);
// }

// foo();


/// Exercise: Counter Factory 


function createCounter(startValue = 0) {
    let count = startValue;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter(5);
console.log(counter.getCount()); // 5
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.getCount()); // 6
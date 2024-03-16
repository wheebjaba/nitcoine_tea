// Greeting
function greet(name) {
    return "H45rtfrt, " + name + "!";
}

// Adding two numbers
function add(x, y) {
    return x + y;
}

// Subtracting one number from another
function subtract(x, y) {
    return x - y;
}

// Multiplying two numbers
function multiply(x, y) {
    return x * y;
}

// Dividing the first number by the second
function divide(x, y) {
    if (y === 0) {
        return "Division by zero is not possible!";
    } else {
        return x / y;
    }
}

// Function calls
console.log(greet("User"));
console.log("Sum of 10 and 5:", add(10, 5));
console.log("Difference between 20 and 7:", subtract(20, 7));
console.log("Product of 3 and 8:", multiply(3, 8));
console.log("Division of 100 by 10:", divide(100, 10));

// Step 2: If-else Condition
let number = 5; // Assign any number here

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Step 3: Switch Statement
let day = 3; // Assign a number between 1 and 7

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}

// Step 4: Loops (For, While, Do...While)
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("While Loop:");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("Do...While Loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Step 5: Control Flow with break and continue
console.log("Break Example:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stop the loop when i equals 3
    }
    console.log(i);
}

console.log("Continue Example:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip the iteration when i equals 3
    }
    console.log(i);
}

// Step 6: Scope and Context
let globalVar = "I'm global!"; // Global variable

function scopeExample() {
    let localVar = "I'm local!"; // Local variable
    console.log(globalVar); // Access global variable
    console.log(localVar); // Access local variable
}

scopeExample();

console.log(globalVar); // Can access global variable
// console.log(localVar); // Cannot access local variable (this will cause an error)

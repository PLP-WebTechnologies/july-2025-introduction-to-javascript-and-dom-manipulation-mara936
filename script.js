// ===== Part 1: Variable declarations and conditionals =====
let userName = "Maria";
let userAge = 20;

if (userAge >= 18) {
    console.log(`${userName} is an adult.`);
} else {
    console.log(`${userName} is a minor.`);
}

// ===== Part 2: Custom Functions =====

// Function to greet a user
function greet(name) {
    return `Hello, ${name}! Welcome to the project.`;
}

// Function to calculate the square of a number
function square(num) {
    return num * num;
}

console.log(greet(userName));
console.log("Square of 5:", square(5));

// ===== Part 3: Loops =====

// For loop example
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// While loop example
let count = 1;
while (count <= 3) {
    console.log("While loop count:", count);
    count++;
}

// ===== Part 4: DOM interactions =====
const heading = document.getElementById("heading");
const message = document.getElementById("message");
const changeTextBtn = document.getElementById("changeTextBtn");
const addListItemBtn = document.getElementById("addListItemBtn");
const itemList = document.getElementById("itemList");

// Interaction 1: Change text when button is clicked
changeTextBtn.addEventListener("click", () => {
    heading.textContent = "Text Changed!";
    message.textContent = "You clicked the button.";
});

// Interaction 2: Add items to a list using a loop
addListItemBtn.addEventListener("click", () => {
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i}`;
        itemList.appendChild(li);
    }
});

// Interaction 3: Change background color of heading
heading.addEventListener("mouseover", () => {
    heading.style.backgroundColor = "#f0e68c";
});

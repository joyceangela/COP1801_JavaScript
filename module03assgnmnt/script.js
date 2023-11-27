// script.js

// Function to display a message on the webpage
function displayMessage(message) {
    document.body.innerHTML += `<p>${message}</p>`;
}

// For loop to count from 0 to 10 and check if the number is odd or even
for (let i = 0; i <= 10; i++) {
    let type = i % 2 === 0 ? 'even' : 'odd';
    displayMessage(`Count ${i} is ${type}`);
}

// Ask the user for a number between 5 and 20
let myNum = parseInt(prompt("Enter a number between 5 and 20:"));
if (isNaN(myNum) || myNum < 5 || myNum > 20) {
    displayMessage("Invalid input. Please reload the page and enter a number between 5 and 20.");
} else {
    // Do While loop that runs until the loop counter equals myNum
    let counter = 1;
    do {
        displayMessage(`Counter: ${counter}`);
        counter++;
    } while (counter <= myNum);
}

// Array of subjects
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Displaying array values using forEach()
subjects.forEach(subject => displayMessage(subject));

// Displaying array values separated by commas
displayMessage(subjects.join(", "));

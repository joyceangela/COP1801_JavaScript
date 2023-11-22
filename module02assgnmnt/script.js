// script.js

// Function to calculate the area of a circle
function calculateArea(radius, pi) {
    return pi * radius * radius;
}

// Function to display a message on the webpage
function displayMessage(message) {
    document.body.innerHTML += `<p>${message}</p>`;
}

// Prompting user for their first name and store it in Fname
let Fname = prompt("Please enter your first name:");
displayMessage(`Hello ${Fname}, welcome to our webpage!`);

// A constant for the value of Pi
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in myFavNum
let myFavNum = prompt("Please enter your favorite number:");
myFavNum = parseFloat(myFavNum); // Convert the input to a number

// Calculate the area of a circle using the user's favorite number as the radius
let myArea = calculateArea(myFavNum, piValue);

// Display the results on the webpage
displayMessage(`You entered ${myFavNum} as your favorite number. If that was the radius of a circle, the circle's area would be ${myArea.toFixed(6)}.`);

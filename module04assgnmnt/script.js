// Function to verify service quality
function isValidServiceQuality(serviceQuality) {
    return serviceQuality === 'great' || serviceQuality === 'ok' || serviceQuality === 'poor';
}

// Function to verify service amount
function isValidServiceAmount(amount) {
    return amount >= 5 && amount <= 500;
}

// Function to calculate the tip amount
function calculateTip(amount, serviceQuality) {
    let tipRate;

    switch (serviceQuality) {
        case 'great':
            tipRate = 0.20;
            break;
        case 'ok':
            tipRate = 0.15;
            break;
        case 'poor':
            tipRate = 0.10;
            break;
        default:
            tipRate = 0;
    }

    return amount * tipRate;
}

// Function to display a message on the webpage
function displayMessage(message) {
    document.body.innerHTML += `<p>${message}</p>`;
}

// Prompt user for service amount and quality
let serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));
let serviceQuality = prompt("Was the service great, ok, or poor?").toLowerCase();

// Validate service amount and quality
if (!isValidServiceAmount(serviceAmount)) {
    displayMessage("Invalid service amount. Please enter a value between $5.00 and $500.00.");
} else if (!isValidServiceQuality(serviceQuality)) {
    displayMessage("Invalid service quality. Please enter 'great', 'ok', or 'poor'.");
} else {
    // Calculate and display the tip
    let tipAmount = calculateTip(serviceAmount, serviceQuality);
    displayMessage(`For a service amount of $${serviceAmount.toFixed(2)}, a ${serviceQuality} service deserves a tip of $${tipAmount.toFixed(2)}.`);
}

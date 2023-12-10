// Creating an object literal for Akamaru
const myDog = {
    name: "Akamaru",
    show: "Naruto",
    breed: "unknown breed",
    role: "Kiba Inuzuka's ninja dog",
    mySound: "I'm silent but deadly in combat!",

    // Displaying the dog's information
    describe: function() {
        return `Hello, my name is ${this.name}. ${this.mySound} I starred in the TV show '${this.show}'. My character was an ${this.breed}. I was ${this.role}.`;
    }
};

// Function to display a message on the webpage
function displayMessage(message) {
    document.body.innerHTML += `<p>${message}</p>`;
}

// Display the description on the webpage
displayMessage(myDog.describe());

// Constructor function for creating a dog object
function MyDogConst(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display greeting
    this.myGreeting = function() {
        return `Hello, my name is ${this.name}, ${this.mySound} I starred in the TV show '${this.show}'. My character was an ${this.breed}. I was ${this.role}.`;
    };
}

// Creating an object for Akamaru
const myDogConst = new MyDogConst("Akamaru", "Naruto", "unknown breed", "Kiba Inuzuka's ninja dog", "I'm silent but deadly in combat!", false);

// Display the greeting on the webpage
displayMessage(myDogConst.myGreeting());

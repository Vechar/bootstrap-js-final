
const drinks = {
    "Mocha": 5.99,
    "Espresso": 3.99,
    "Latte": 4.99,
    "Cappuccino": 4.49
}

let feedbackObject = {} // "email": "feedback"

// Random Drink Suggestion

function suggestRandomDrink(drinks) {
    const keys = Object.keys(drinks); 
    const randomIndex = Math.floor(Math.random() * keys.length); // Choose random drink index
    const randomDrink = keys[randomIndex];
    console.log(`How about a ${randomDrink}?`);
    return randomDrink;
}

// Email Validation

function validateEmail(email) 
{
    if (email.includes("@") && email.includes("."))
    {
        console.log(`${email} is a valid email address`);
    } 
    else 
    {
        console.log(`${email} is an invalid email address`);
    }
}

// Feedback Storage

function storeFeedback(email, feedback)
{
    feedbackObject[email] = feedback;
    console.log(`Feedback from ${email} stored successfully.`);
    console.log(feedbackObject);
}

// Total Price Calculator

let drinksBought = {
    "Mocha": 3,
    "Espresso": 2,
    "Latte": 1,
    "Cappuccino": 10
}

function calculateTotalPrice(drinksBought, drinks) {
    let totalPrice = 0;
    drinksKeys = Object.keys(drinksBought);
    for (let i = 0; i < drinksKeys.length; i++) {
        const drink = drinksKeys[i];
        const quantity = drinksBought[drink];
        if (drinks[drink]) {
            totalPrice += drinks[drink] * quantity;
        } else {
            console.log(`Drink ${drink} not found.`);
        }
    }
    console.log(`Total price: $${totalPrice.toFixed(2)}`);
}

// Print Results
console.log('-----------------------------------');

console.log("Random Drink Suggestion:");
suggestRandomDrink(drinks);

console.log('-----------------------------------');

console.log("Email Validation:");
validateEmail("hey@gmail.com");

console.log('-----------------------------------');

console.log("Feedback Storage:");
storeFeedback("hey@gmail.com", "Great service!");
storeFeedback("hello@hotmail.com", "Bad service!");

console.log('-----------------------------------');

console.log("Total Price Calculation:");
calculateTotalPrice(drinksBought, drinks);

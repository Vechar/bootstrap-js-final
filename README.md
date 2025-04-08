**Author**: Andrei Vechar

**Project**:  Frameworks & Intro to JS Project

**Tools used:** HTML, CSS, Bootstrap, JS

I have decided to go with a small local coffee shop theme this time.

# Pages

All of the pages contain a navbar, hero-image, and a footer. Everything is responsive to different screen sizes

## Index
- About Section
- Fan Favourites Coffee Carousel 
- FAQ Accordion

## Menu
- Row of 3 cards each
- Each card contains an image, title and brief description

## Events
- Contains a table of upcoming events

## Contact Us
- Contact form, includes email, textarea, and submit button.

# JavaScript Functions:

### suggestRandomDrink(drinks)
Purpose: Recommends a random drink from the provided drinks object.

Parameters:

drinks (Object): A list of drink names and their prices.

Returns: A randomly selected drink name.

Example: How about a Latte?

### validateEmail(email)
Purpose: Checks if a given email address is formatted correctly.

Logic: Validates based on the presence of "@" and "." characters.

Parameters:

email (String): The email to validate.

Example Output: hey@gmail.com is a valid email address

### storeFeedback(email, feedback)
Purpose: Stores customer feedback in a global feedbackObject.

Parameters:

email (String): Customer's email.

feedback (String): Feedback message.

Side Effect: Logs and updates the feedbackObject.

### calculateTotalPrice(drinksBought, drinks)
Purpose: Calculates the total cost based on quantity of drinks bought.

Parameters:

drinksBought (Object): Drink names mapped to quantities purchased.

drinks (Object): Drink names mapped to prices.

Output: Logs the total price, formatted to two decimal places.

Example: Total price: $72.90


// Select HTML elements
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Function to generate numbers
function generateNumbers() {

    // Clear existing list
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Set list item text
        listItem.textContent = "The number is " + i;

        // Add item to ordered list
        numberList.appendChild(listItem);
    }
}

// Add click event listener
generateBtn.addEventListener("click", generateNumbers);

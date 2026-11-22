
// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Function to check input
function checkInput() {

    // Read user input
    const inputValue = userInput.value.trim();

    // Check empty input
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    // Convert input into number
    else if (isNaN(Number(inputValue))) {
        result.textContent = "Please enter a valid number!";
    }

    else {
        const number = Number(inputValue);

        // Compare number with 10
        if (number < 10) {
            result.textContent = "The number is lower than 10";
        }
        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }
        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Add click event listener
checkBtn.addEventListener("click", checkInput);

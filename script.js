// Get all the buttons and the result display element
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

// Initialize variables for the calculator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isResultShown = false;

// Add event listeners to all the buttons
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // If the C button
    if (button.id === "clear") {
      // Reset all the variables
      firstNumber = "";
      secondNumber = "";
      operator = "";
      isResultShown = false;
      // Clear the result display
      result.value = "";
    } else if (button.id === "equal") {
      // If the = button
      // Calculate the result
      let resultValue = 0;
      // Display the result
      result.value = resultValue;
      // Reset the variables
      firstNumber = resultValue;
      secondNumber = "";
      operator = "";
      isResultShown = true;
    } else if (button.id === "plus" || button.id === "minus" || button.id === "multiply" || button.id === "divide") {
      // If the operator buttons
      // Set the operator
      operator = button.id;
      // Set the first number
      firstNumber = result.value;
      // Reset the result display
      result.value = "";
    }
    else {
      // If the number buttons
      // If the result is shown, clear the result display
      if (isResultShown) {
        result.value = "";
        isResultShown = false;
      }
      // Add the number to the result display
      result.value += button.value;
    }
  });
});

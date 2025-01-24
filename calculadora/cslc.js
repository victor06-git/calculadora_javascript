let currentInput = ''; // Store the actual input
let previousResult = null; // Store the previous result
let operator = null; // Store the operator
const resultadoLabel = document.getElementById('resultado');
const buttons = document.querySelectorAll('.btn');

// Function for the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === '=') {
            // If the equal button is pressed
            if (currentInput !== '' && operator !== null) { //If there is a number and an operator
                // Make the calculation
                previousResult = calculate(previousResult, parseFloat(currentInput), operator);
                resultadoLabel.textContent = previousResult; // Show the result
                currentInput = ''; // Restart the actual input
                operator = null; // Restart the operator
            }
        } else if (['+', '-', '×', '÷'].includes(buttonText)) {
            // Si se presiona un operador
            if (currentInput !== '') { // If there is a number
                if (previousResult === null) { // If there is no previous result
                    previousResult = parseFloat(currentInput); // Save the number as previous result
                } else {
                    previousResult = calculate(previousResult, parseFloat(currentInput), operator); // Make the calculation with the previous result
                    resultadoLabel.textContent = previousResult;
                }
                operator = buttonText; // Save the operator
                currentInput = ''; // Restart the actual input
            } else if (previousResult !== null) {
                operator = buttonText; // Save the operator
            }
        } else if (buttonText === 'C') {
            // If the clear button is pressed
            currentInput = ''; // Clear the current input
            previousResult = null; // Clear the previous result
            operator = null; // Clear the operator
            resultadoLabel.textContent = '0'; // Reset the display to 0
        
        } else {
            // If it is a number button pressed 
            currentInput += buttonText; // Add the nummber to the current input
            resultadoLabel.textContent = currentInput; // Show the current input
        }
    });
});

// Function to calculate the result
function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            return a / b;
        default:
            return b;
    }
}

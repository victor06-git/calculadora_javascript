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
            if (currentInput !== '' && operator !== null) {
                // Make the calculation
                previousResult = calculate(previousResult, parseFloat(currentInput), operator);
                resultadoLabel.textContent = previousResult; // Show the result
                currentInput = ''; // Restart the actual input
                operator = null; // Restart the operator
            }
        } else if (['+', '-', '×', '÷'].includes(buttonText)) {
            // Si se presiona un operador
            if (currentInput !== '') {
                if (previousResult === null) {
                    previousResult = parseFloat(currentInput); // Guarda el primer número
                } else {
                    previousResult = calculate(previousResult, parseFloat(currentInput), operator); // Calcula el resultado
                }
                operator = buttonText; // Guarda el operador
                currentInput = ''; // Reinicia el input actual
                resultadoLabel.textContent = ''; //Restart the label
            }
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

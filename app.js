// Wybieramy elementy z HTML
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const currentOperandText = document.querySelector('.current-operand');

let currentOperand = '';

// Funkcja aktualizująca wyświetlacz
function updateDisplay() {
    currentOperandText.innerText = currentOperand || '0';
}

// Obsługa przycisków cyfr
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperand += button.innerText;
        updateDisplay();
    });
});

// Obsługa przycisku "C" (Clear)
clearButton.addEventListener('click', () => {
    currentOperand = '';
    updateDisplay();
});

// LOGIKA DODAWANIA (to jest serce Twojej gałęzi feature-add)
let previousValue = 0;

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '+') {
            previousValue = parseFloat(currentOperand);
            currentOperand = '';
            updateDisplay();
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (previousValue !== 0) {
        const result = previousValue + parseFloat(currentOperand);
        currentOperand = result.toString();
        previousValue = 0;
        updateDisplay();
    }
});
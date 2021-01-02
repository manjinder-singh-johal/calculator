const display = document.getElementById('display');
let number1 = 0;
let number2 = 0;

const updateDisplay = (number) => {
    display.innerHTML = display.innerHTML + number;
}

const clearDisplay = () => {
    display.innerHTML = 0;
}

const onPlusClick = () => {
    number1 = display.innerText;
    clearDisplay();
}

const onEqualClick = () => {
    number2 = display.innerText;
    const result = parseInt(number1) + parseInt(number2);
    clearDisplay();
    updateDisplay(result);
}
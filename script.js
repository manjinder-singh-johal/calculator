const display = document.getElementById('display');
let number1 = 0;
let number2 = 0;
let operator;

const updateDisplay = (number) => {
    if (display.innerText === '0') {
        display.innerHTML = '';
    }

    display.innerHTML = display.innerHTML + number;
}

const clearDisplay = () => {
    display.innerHTML = 0;
}

const onPlusClick = () => {
    number1 = display.innerText;
    operator = 'plus';
    clearDisplay();
}

const onMinusClick = () => {
    number1 = display.innerText;
    operator = 'minus';
    clearDisplay();
}

const onMultiplyClick = () => {
    number1 = display.innerText;
    operator = 'multiply';
    clearDisplay();
}

const onDivideClick = () => {
    number1 = display.innerText;
    operator = 'divide';
    clearDisplay();
}

const onEqualClick = () => {
    number2 = display.innerText;
    let result = 0;
    if (operator === 'plus') {
        result = parseInt(number1) + parseInt(number2);
    } else if (operator === 'minus') {
        result = parseInt(number1) - parseInt(number2);
    } else if (operator === 'multiply') {
        result = parseInt(number1) * parseInt(number2);
    } else if (operator === 'divide') {
        result = parseInt(number1) / parseInt(number2);
    }
    
    clearDisplay();
    updateDisplay(result);
}
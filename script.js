const display = document.getElementById('display');
let number1 = 0;
let number2 = 0;
let operator;

const updateDisplay = (number) => {

    if (display.innerText === '0') {
        display.innerHTML = '';
    }

    // TODO: reset to default font size
    if (display.innerText.length > 4) {
        display.style.fontSize = '40px';
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
        result = parseFloat(number1) + parseFloat(number2);
    } else if (operator === 'minus') {
        result = parseFloat(number1) - parseFloat(number2);
    } else if (operator === 'multiply') {
        result = parseFloat(number1) * parseFloat(number2);
    } else if (operator === 'divide') {
        result = parseFloat(number1) / parseFloat(number2);
        result = result.toFixed(2);
    }
    
    clearDisplay();
    updateDisplay(result);
}
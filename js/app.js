
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }

}

function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    return randomPin;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinElement = document.getElementById('display-pin');
    displayPinElement.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previousTypeNumber = typeNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinElement = document.getElementById('display-pin');
    const currentPin = displayPinElement.value;

    const typeNumberField = document.getElementById('typed-number');
    const typeNumber = typeNumberField.value;

    const pinSuccessMsg = document.getElementById('pin-Success');
    const pinUnSuccessMsg = document.getElementById('pin-incorrect');

    if (typeNumber === currentPin) {
        pinSuccessMsg.style.display = 'block';
        pinUnSuccessMsg.style.display = 'none';
    }
    else {
        pinUnSuccessMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
})
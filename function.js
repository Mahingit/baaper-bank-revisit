function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const previousBalanceTotalText = balanceTag.innerText;
    const previousBalanceTotal = getInnerTextValue('balance-total');
    let newBalanceTotal;
    if (isAdding == true) {
        newBalanceTotal = previousBalanceTotal + amount;
    }
    else {
        newBalanceTotal = previousBalanceTotal - amount;
    }
    bdocument.getElementById('balance-total').innerText = newBalanceTotal;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

function updateTotal(fieldId, amount) {
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getInnerTextValue(fieldId).innerText = newTotal;
    return newTotal;
}

//handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
})

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})
const inputValue = (inputAmount) => {
    const inputField = document.getElementById(inputAmount);
    const amountText = inputField.value;
    const amountNum = parseFloat(amountText);
    inputField.value = '';
    return amountNum;
}

const updateDepositWithdraw = (currentAmount, inputAmount) => {
    const spanTag = document.getElementById(currentAmount);
    const currentAmountText = spanTag.innerText;
    const currentAmountNum = parseFloat(currentAmountText);
    const currentAmountTotal = currentAmountNum + inputAmount;
    spanTag.innerText = currentAmountTotal;
}

const getBalance = (balance) => {
    const spanTag = document.getElementById(balance);
    const balanceText = spanTag.innerText;
    const balanceNum = parseFloat(balanceText);
    return balanceNum;
}

const caculationBalance = (currentBalance, userAmount, balance, isAdd) => {
    const spanTag = document.getElementById(currentBalance);
    if (isAdd == true) {
        spanTag.innerText = balance + userAmount;
    }
    else {
        spanTag.innerText = balance - userAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', () => {
    const depositAmount = inputValue('deposit-input');
    const balance = getBalance('balance');
    if (depositAmount > 0) {
        updateDepositWithdraw('deposit', depositAmount);
        caculationBalance('balance', depositAmount, balance, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', () => {
    const withdrawAmount = inputValue('withdraw-input');
    const balance = getBalance('balance');
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        updateDepositWithdraw('withdraw', withdrawAmount);
        caculationBalance('balance', withdrawAmount, balance, false);
    }
})
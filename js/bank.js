
/* -------------------------------------------
    Function for Deposit and Withdraw 
    -----------------------------------------*/
const calculationPlus = (inputAmount, currentAmount) => {
    const inputAmountNum = parseFloat(inputAmount);
    const currentAmountText = currentAmount.innerText;
    const currentAmountNum = parseFloat(currentAmountText);

    if (inputAmountNum <= 0) {
        alert("Please enter a positive amount!!");
    }
    else {
        currentAmount.innerText = inputAmountNum + currentAmountNum;
    }
}

const BalanceSum = (inputTaka, currentTaka) => {
    const inputTakaNum = parseFloat(inputTaka);
    // console.log(inputTakaNum);
    const currentTakaText = currentTaka.innerText;
    const currentTakaNum = parseFloat(currentTakaText);
    // console.log(currentTakaNum);

    if (inputTakaNum > 0) {
        const totalBalance = inputTakaNum + currentTakaNum;
        currentTaka.innerText = totalBalance;
    }
}

const BalanceSub = (inputTaka, currentTaka) => {
    const inputTakaNum = parseFloat(inputTaka);
    // console.log(inputTakaNum);
    const currentTakaText = currentTaka.innerText;
    const currentTakaNum = parseFloat(currentTakaText);
    // console.log(currentTakaNum);
    if (inputTakaNum > 0) {
        const totalBalance = currentTakaNum - inputTakaNum;
        currentTaka.innerText = totalBalance;
    }
}

/* ---------------------------------------
    Add Event Handler on Button 
    --------------------------------------*/
document.getElementById('deposit-button').addEventListener('click', () => {
    const depositAmount = document.getElementById('deposit-input').value;
    const deposit = document.getElementById('deposit');
    calculationPlus(depositAmount, deposit);
    const balance = document.getElementById('balance');
    BalanceSum(depositAmount, balance);
    document.getElementById('deposit-input').value = '';
})

document.getElementById('withdraw-button').addEventListener('click', () => {
    const withdrawAmount = document.getElementById('withdraw-input').value;
    const withdraw = document.getElementById('withdraw');
    calculationPlus(withdrawAmount, withdraw);
    const balance = document.getElementById('balance');
    BalanceSub(withdrawAmount, balance);
    document.getElementById('withdraw-input').value = '';
})


document.getElementById('login-button').addEventListener('click', () => {
    const emailInput = document.getElementById('email-input').value;
    const passwordInput = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');

    if (emailInput === 'user@gmail.com' && passwordInput === 'user') {
        window.location.href = 'bank.html';
    }
    else {
        errorMessage.innerHTML = "Email or Password Does not Match!";
    }
})
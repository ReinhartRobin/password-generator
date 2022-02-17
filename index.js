var contentArray = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@-_.".split("");
var password = [];
var numberOfDigits;

function generatePassword() {
    numberOfDigits = document.querySelector("#numberOfDigits").value;
    if (numberOfDigits < 6) {
        alert("Number of digits must be at least 6");
        return;
    } else if (numberOfDigits >= 30) {
        alert("Number of digits must be smaller than 30");
        return;
    }

    for (let i = 0; i < numberOfDigits; i++) {
        password.push(contentArray[Math.floor(Math.random() * contentArray.length)]);
    }
    document.querySelector("#password").innerHTML = password.join("");
}
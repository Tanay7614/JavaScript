const prompt = require('prompt-sync')();

function palindrome(number) {
    let reverse = 0;
    let rem = 0;
    let actualNumber = number;

    while (number > 0) {
        rem = (number % 10);
        reverse = (reverse * 10 + rem);
        number = Math.floor(number / 10);
    }

    if (reverse == actualNumber)
        console.log("Number is a palindrome");
    else
        console.log("Number is not a palindrome");
}

const NUMBER = prompt('Enter number: ');

let result = palindrome(NUMBER);
console.log(result);
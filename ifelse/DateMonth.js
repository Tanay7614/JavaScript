const prompt = require('prompt-sync')();

let DATE = prompt('Enter the DATE: ');
let MONTH = prompt('Enter the MONTH: ');
let result="false"
if (MONTH>=3 && MONTH<=6) {
    if (DATE>=20 && DATE<=31) {
        result="true";
    }
}
console.log(result) 
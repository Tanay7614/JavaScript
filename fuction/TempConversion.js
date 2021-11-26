const prompt = require('prompt-sync')();

function celsToFar(temp) {
    degFahr = (9 / 5) * temp + 32;
    console.log("Cel to Fahr conversion value is: " + degFahr);
}

function fahrToCels(temp) {
    degCel = (temp - 32) * (5 / 9);
    console.log("Fahr to Cel conversion value is: " + degCel);
}

let option = prompt("Enter : 1. Cel to Fahr 2. Fahr to Cel : ");
switch (Number(option)) {
    case 1:
        let Temperature = prompt("Enter temperature in the range of 1-100: ")
        if (Temperature >= 0 && Temperature <= 100) {
            celsToFar(Temperature);
        }
        else {
            console.log("Temperature out of range.");
        }
        break;
    case 2:
        let Fahr = prompt("Enter Fahrenheit value in the range of 32F - 212F: ");
        if (Fahr >= 32 && Fahr <= 212) {
            fahrToCels(Fahr);
        }
        else {
            console.log("Temperature out of range.");
        }
        break;
    default:
        console.log("invalid option!");
        break;
}
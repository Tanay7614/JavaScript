const prompt = require('prompt-sync')();

const num = prompt('Enter a number: ');
 
if ( num  < 10 ) {
    console.log("Unit place");
}
else if ( num >=10 && num < 100 ) {
    console.log("Tenth place");
}
else if ( num >=100 && num < 1000 ) {
    console.log("Hundred place");
}
else if ( num >= 1000 && num<=9999 ) {
    console.log("Thousands place");
}
else {
    console.log("Invalid input!");
}

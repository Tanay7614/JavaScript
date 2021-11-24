const prompt = require('prompt-sync')();
let num = prompt('Enter a number upto you want to print a table: ');
for(i=0; i<=num; i++){
    table=2*i
    console.log("2 to the power "+i+" ="+table)
}
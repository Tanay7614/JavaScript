const prompt = require('prompt-sync')();
let num = prompt('Enter the number: ');
fact=1
for(i=1;i<=num;i++)
{
    fact=fact*i
}
console.log("Factors of "+num+" is "+fact)
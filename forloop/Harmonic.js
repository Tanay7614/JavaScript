const prompt = require('prompt-sync')();
let num = prompt('Enter a number upto you want to print harmonic no: ');
sum=0
for(i=1; i<=num; i++)
{
    sum=sum+1/i
    console.log("1/"+i+"+")
}
console.log(sum)



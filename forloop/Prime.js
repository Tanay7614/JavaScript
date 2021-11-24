const prompt = require('prompt-sync')();
let num = prompt('Enter the NUMBER: ');
flag=0
for(i=2;i<=num/2;i++){
    if(num == 2){
        console.log(num+" IS PRIME NO")
        flag=1 
        break;
    }
    if(num%i == 0){
        console.log(num+" IS NOT PRIME NO")
        flag=1
        break;
    }
}
if(flag == 0){
    console.log(num+" IS PRIME NO") 
}
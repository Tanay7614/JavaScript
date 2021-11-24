const prompt = require('prompt-sync')();
let num = prompt('Enter the number: ');
flag=0;
console.log("2")
for(i=3;i<=num;i++){
   for(j=2;j<=i/2;j++)
   {
       if(i%j == 0)
       {
           flag=1;
           break;
       }
    }
    if(flag == 0){
        console.log(i)
    }
}

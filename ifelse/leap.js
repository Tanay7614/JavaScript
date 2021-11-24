// "use strict";
// const ps= require("prompt-sync");
// const prompt = ps();
// let name = prompt("name");
year=2019
if(year%4==0 && year%100!=0 || year%400==0){
    console.log(year+" is a leap year")
}
else{
    console.log(year+" is not a leap year")
}

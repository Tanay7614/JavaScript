let ran1=Math.floor(Math.random()*999)+100
let ran2=Math.floor(Math.random()*999)+100
let ran3=Math.floor(Math.random()*999)+100
let ran4=Math.floor(Math.random()*999)+100
let ran5=Math.floor(Math.random()*999)+100
console.log(ran1+" "+ran2+" "+ran3+" "+ran4+" "+ran5)
if(ran1>ran2){
    max=ran1
}
else{
    max=ran2
}
if(ran3>max){
   max=ran3
}
if(max<ran4){
   max=ran4
}
if(max<ran5){
    max=ran5
}
console.log("Max "+max)
if(ran1>ran2){
    min=ran2
}
else{
    min=ran1
}
if(ran3<min){
   min=ran3
}
if(min>ran4){
   min=ran4
}
if(min>ran5){
    min=ran5
}
console.log("Min "+min)
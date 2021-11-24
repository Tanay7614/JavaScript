
head=0
tail=0
while(head < 11 && tail < 11)
{
    let result=Math.floor(Math.random()*2)
    console.log(result)
    if(result==1)
    {
        head++
    }else{
        tail++
    }
}
if(head==11){
    console.log("head wins")
}else{
    console.log("tail wins")
}
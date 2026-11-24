function orderFood(callback)
{
    console.log("food ordered");
    setTimeout(()=>
    {
        console.log("food is ready");
        callback();
    },3000);

    
}
function receiveFood()
{
    console.log("food received");
}
orderFood(receiveFood);
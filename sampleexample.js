//false values:-false,0,-0,big0,"",null,undefined,Nan
//remaining all values are truth values-
//true,1,-1,"hello",[],"zero","false",{},function(){},-truthy value

let value =0;
if(value)
{
    console.log("truthy value");
    
}
else
{
    console.log("falsy value");
}

let name = "";
if(name){
    console.log("truthy value");
}
else{
    console.log("falsy value");
}
let fruits = [];
if(fruits){
    console.log("elements are available");
}
else{
    console.log("elements are not available");
}
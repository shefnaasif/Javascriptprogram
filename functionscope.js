//scope- oru variable evdokeyano access cheyan patunad adine anu scope enu parayunad
// different types of scope
//1. global scope- oru functionte puratho oru classinte akkatho oru variablene declare cheyunad

/*let name= "zaira";
function displayname()
{
    console.log(name);
}
displayname();
console.log(name); */

// function scope- variable can be accessed inside function

/*function showdetail()
{
    let name= "shefna";
    let age = 25;
    console.log("name",name);
    console.log("age",age);
}
showdetail();
console.log(name)
console.log(age);*/
//block space - variable can be declared inside the block
//used in conditional statement
if(true)
{
    let age = 25;
    const name = "shefna";
    var city = "kochi";
    console.log(age);
    console.log(name);
    console.log(city);
    console.log(name,age);
}

//for each method
students = ["anu","manu","sanu"];
students.forEach(function(name)//syntax
{
console.log(name);
});

/*
//map method
let numbers = [1,2,3,4,5];
let result = numbers.map(function(num)
{
return num*2;

});
console.log(result);

let names = ["anu","manu","sanu"];
 name1 = names.map(function(name)
 {
return name.toUpperCase();
 }
);
console.log(name1);

*/
//filter method

let numbers1 =[1,2,3,4,5,6];
let filteredNumbers = numbers1.filter(function(num){
    return num>3;
});
console.log(filteredNumbers);


let numbers2=[56,79,54,34];
numbers3=numbers2.filter(function(num1){
     return num1%2===0;
});
console.log(numbers3);

let fruits =["apple","banana","mango"];
//push method used for adding an element into the end of array
fruits.push("grape");
console.log(fruits);
//remove an element from an array from the end of the array-pop method
let fruits1=["papaya","kiwi","orange"];
fruits1.pop();
console.log(fruits1);
//to add an elemnt in the beginning of an array -unshift
let fruits2=["papaya","kiwi","orange"];
fruits2.unshift("plum");
console.log(fruits2);
//to remove first elemnt in the begining of an array-shift method
let fruits3=["papaya","kiwi","orange"];
fruits3.shift();
console.log(fruits3);

//doubt :

//splice method - oru specific index il elemnt add cheyanum remove cheyanum use cheyunad
let fruits4=["papaya","kiwi","orange"];
fruits4.splice(1,1);//1 starting index, 1 - etra elemnt remove cheyanam
console.log(fruits4); //kiwi removed
let fruits5=["papaya","kiwi","orange","grape","cherry"];
let result =fruits5.splice(1,3); //[1 index mudal 3rd vare but 3rd index varila]
console.log(result);
console.log(fruits5);

// -->doubt

//to know the index of an element
let fruits6=["custard","mossambi","melon","lemon"];
console.log(fruits6.indexOf("melon"));
console.log(fruits6.indexOf("banana"));


//
let numbers=[10,20,30,40,20,50];
console.log(numbers.lastIndexOf(20));

let fruits7=["custard","mossambi","melon","lemon"];
console.log(fruits7.includes("apple"));
console.log(fruits7.includes("melon"));

//sorting

let numbers1=[10,20,30,40,20,50];
numbers1.sort((a,b)=>a-b);
console.log(numbers1);


let numbers2=[10,20,30,40,20,50];
numbers2.sort((a,b)=>b-a);
console.log(numbers2);


//reverse method:
let fruits8=["custard","mossambi","melon","lemon"];
fruits8.reverse();
console.log(fruits8);
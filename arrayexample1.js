/* //to access first and last element of an array

let numbers=[10,20,20,40,50,60];
console.log("first element", numbers[0]);
console.log("last element", numbers[numbers.length-1]);

//array update

let marks = [45,56,78,67,89];
marks[2]=90;
console.log(marks);

let fruits=["apple","grapes","banana"];
for (let index in fruits)
{
console.log(index);
}

// to know the value of index

let student = ["anu","sita","rama"];
for (let index in student)
{
    console.log(index,student[index]);
}

let mark1 = [10,24,56,78,90];
let total = 0;
for (let index in mark1)
{
    total=total+mark1[index];
}
console.log(total);

*/
//For of loop.
//return index value of an array

let fruits =["papaya","kiwi","mango"];
for (let value of fruits)
{
    console.log(value);
}

let numbers = [5,6,7,8,9];
for (let even of numbers)
{
    if(even%2===0)
    {
        console.log("even number",even);
    }
}
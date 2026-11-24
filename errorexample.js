// run time error
// let student = null;
//console.log(student.name);

/*//logical error
let a =10;
let b = 20;
let result = a-b;
console.log(result); // output is negative.- logical error : we are expecting a positive value byt we got negative value
*/
try{


let result = 10/0;
console.log(result);
throw new Error("something went wrong");

}catch(error)
{
    console.log("error ocured",error.message);
}
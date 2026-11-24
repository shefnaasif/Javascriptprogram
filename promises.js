//asynchrnonuous opeartion whise result may be comes in future only
/*let myPromise=new Promise((resolve,reject)=>{
  let payment = true;
  if(payment)
    {
        resolve("payment successful");
    }  
    else
    {
         reject("payment failed")
    }
});
myPromise.then((result)=>{
    console.log(result);

})
.catch((error)=>{
console.log(error)
});
*/
function getdata(){
   return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data received");

        },3000);
    });
}
async function displayData()
{
console.log("fetching data");
let result = await getdata();   //promise return cheyunu so it is an asynchronus 
console.log(result);

}
displayData();
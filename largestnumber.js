function findlargest(a,b,c)
{
    if(a>b && a>c)
    {
        console.log("largest number is :",a);
    }
    else if(b>a && b>c)
    {
        console.log("largest number is:",b);
    }
    else
    {
        console.log("largest number is:",c);
    }
}
findlargest(10,20,5);
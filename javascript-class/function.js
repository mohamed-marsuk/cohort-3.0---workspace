// function - define code once and use it many times
//            to perform some code, call the function name

function product(a,b) // parameter
{
    return a*b;
}
console.log(product(5,10)); // argument
 // recursion - function calling itself

 function factorial(n)
 {
    if(n==1)
        return 1
    return  n*factorial(n-1)
 }
 console.log(factorial(5));
 // arrow function 
 let arr = [1,2,3,4,5];
 let res = (arr)=>{
    let res = 0;
    for(let val of arr)
    {
        res +=val;
    }
    
    return res;
 }
 console.log(res(arr));

  
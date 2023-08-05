//function 
function addNums(num1, num2)
{
    console.log(num1 + num2);
}
addNums(10,12);

//or u can use retuen statement for function 

function AddNums(n1,n2)
{
    return n1+n2;
}
console.log(AddNums(12,15));



//arrow function
/*to convert a fun to arrow fun , repalece function by const or let keyword 
and after parameters give arrow */

const addition =(number1,number2) =>
{
    return number1 + number2;
}
console.log(addition(5,10));


//or we can use like this
//if have to provide return then give curly brace{} after =>
let sum=(v1 , v2)=> v1+v2
console.log(sum(5,3));

//if condition
const x = 10;
if(x == 10)
{
    console.log('x is 10');
}
else if(x > 10){
    console.log("x is greter than 10");
}
else{
    console.log("x is less than 10");
}

//
const y = 5;
const z = 10;
if(y > 4 && z >=11)
{
    console.log('y and z are valid');
} 

//turnery operator (?)
const r = 10;
const color = r > 10 ? 'red':'black';
console.log(color);   // if condi'n is true then will print
                       //red and if false then print black
                       

//switch statement for above

switch(color)
{
    case  "red":
        console.log('color is red');
        break;
    case "red":
        console.log('color is black ');
        break;

    default:
        console.log('color is not present');
        break;
}
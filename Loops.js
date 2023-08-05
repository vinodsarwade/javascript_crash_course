const todos =[{
    id:1,
    text:"take your time",
    isCompleted:true
},
{
    id:2,
    text:"what is the time",
    isCompleted:false

},
{
    id:3,
    text:" time is money",
    isCompleted:false
}]


//for loop for above array
for(let i = 0 ; i < todos.length ; i++)
{
    console.log(todos[i].text);
    // console.log(todos[i]);
}


// another type of foe loop
for (let todo of todos)
{
    console.log(todo.id);
}


//simple for loop
for(let i = 0; i < 10; i++)
{
    console.log(`for loop numbers are:${i}`);
}

//while loop

let i = 0;
while(i < 10)
{
    console.log(i);
    i++;
}
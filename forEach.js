//forEach loop

todos.forEach(function(todo){
 console.log(todo.text);  // will print text in todos arary
});


//map

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

//filter

const p1 = todos.filter(function(todo){
    return todos.id > 2 ;   // will filter the todos array which has id is > 2.
})
console.log(p1);
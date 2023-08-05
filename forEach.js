//forEach loop

todos.forEach(function(todo){
 console.log(todo.text);  // will print text in todos arary
});


//map ..

/*The map() method is powerful and commonly used in JavaScript
for data manipulation, transforming arrays of data, 
 and generating new arrays based on existing ones. 
 It is especially useful when you need to apply the same operation to each element in an array 
 and create a modified version of the original array*/


const newArray = todos.map(function(todo){
    return todo.text;
});

console.log(newArray);

//filter....this method is used to filtering the array.

const p1 = todos.filter(function(todo){
    return todo.id > 1 ;   // will filter the todos array which has id is > 1.
})
console.log(p1);
const numbers =[1,2,3,4,5,6]
console.log(numbers);

const fruits=['apple','mango'];
console.log(fruits);

console.log(fruits[1]);

fruits[2]='orange';
console.log(fruits);

fruits.push('greps');
fruits.unshift('strwaberry');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('mango'));


let s='vinod';
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.split(''));


//object literals

const person={
    firstName:"vinod",
    lastName:"sarwade",
    age :23,
    hobbies:['music','cricket','sports'],
    address:{
        street :'hanuman galli',
        city :'yevti',
        state:'maharashtra'
    }
}
console.log(person.firstName, person.lastName, person.age);
console.log(person.hobbies[1]);
console.log(person.address.city);  


const{firstName,lastName,address:{city}}=person;
console.log(firstName,lastName);
console.log(city);


person.email='vinod@12'
console.log(person);

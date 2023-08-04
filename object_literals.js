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

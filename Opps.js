//constructor

// function person(firstName,lastName,DOB)
// {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.DOB=DOB;
// }

// //prototype 
// person.prototype.getBirthYear = function(){
//     return this.DOB.getFullYear();
// }

// person.prototype.getFullName = function(){
//     return this.firstName,this.lastName
// }

//class
class person{
    constructor(firstName,lastName,DOB)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.DOB=DOB;
    }

    getBirthYear(){
        return this.DOB.getFullYear();
    }

    getFullName(){
        return this.firstName,this.lastName;
    }
}

//to create a object for constructor

const person1 =new person('vinod','sarwade','18-7-2000');
console.log(person1);





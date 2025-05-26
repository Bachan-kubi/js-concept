"use strict";

// 1. When used in an object method, this refers to the object.
const person = {
    firsname: 'Bachan',
    lastname: 'kubi',
    fullname: function (){
        return this.firsname + this.lastname
        // return this;
    }
};
const person2 ={
    firsname: 'Ruma',
    lastname: 'Boul'
};
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.
console.log(person.fullname.call(person2));
// With the bind() method, an object can borrow a method from another object.
let ami = person.fullname.bind(person2);
console.log(ami());
console.log(person.fullname());
// 2-3. Alone and Strick mood-When used alone, this refers to the global object.
let x = this;
console.log(this);
//4. In a function, the global object is the default binding for this.
function meThis(){
    console.log(this);
}
meThis();

function myFunction() {
  return this;
}
console.log(myFunction());

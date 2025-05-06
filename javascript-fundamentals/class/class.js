class learnClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(this.name, this.age);
    }
}
const sei = {
    name: 'rani',
    age: 30
}
const pani = {
    age: 30
}

const ami = new learnClass(sei, pani);
// console.log(ami.sayHi());
ami.sayHi()

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year
    };
    age(x){
        return x-this.year; 
    };
    stop(s){
        return(
            `${s} should stop `)
        
    }
}
// const car = new Car("ford", 2000);
const car1 = new Car("Toyota", 2005);
let date = new Date();
let year = date.getFullYear();
document.getElementById('car').textContent = `Car name is: ` + car1.name + ", " + "Age: "+car1.age(year);
console.log('object');

// extends key words
class Cycle extends Car{
    break(){
        console.log(`${this.name} breaks hardly and its making year is ${this.year}`);
    }
}
const bike = new Cycle("My Bike", 2001);
console.log(bike);
bike.break();
console.log(bike.stop('my bike'));




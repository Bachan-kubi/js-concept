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
        // let date = new Date()
        // return date.getFullYear()-this.year;
        return x-this.year;
        
    };
}
// const car = new Car("ford", 2000);
const car1 = new Car("Toyota", 2005);
let date = new Date();
let year = date.getFullYear();
// document.getElementById('car').textContent = `Car name is: ` + car1.name + ", " + "Age: "+car1.age(year);
console.log('object');


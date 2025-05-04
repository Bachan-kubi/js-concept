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

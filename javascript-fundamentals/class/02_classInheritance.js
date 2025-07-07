class Animal{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    run(x){
        console.log(`${this.name} runs very fast`)
    }
    hide(){
        console.log(`${this.name} can hide very fast at the age of ${this.age}`);
    }
    speed(x){
        console.log(`${this.name} runs at top speed of ${this.age}`);
    }
}
const cow = new Animal('Desi cow', 20);
cow.hide();
cow.speed();

class Rabbit extends Animal{
    run(){
        console.log('run');
        //overridding a method, we can use super before calling a method from its parents method
        super.run();
        // console.log(`${this.name} runs ver quickly!`);
    }
    about(x,y,z){
        return (`${x} can run ${y} at speed ${z}km in hours`);
    }
    speed(){
        // super is application at arrow fucntion in overridding a method in js. 
        // setInterval(()=>super.speed(), 3000)
        setTimeout(()=>super.speed(), 2000)
    }
}
const rabbit = new Rabbit('MyRabbit', 40);
console.log(rabbit);
console.log(rabbit.about("potu",10, 150));
rabbit.run();
rabbit.speed();

// overriding contructor
class Monkey{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
};
class Human extends Monkey{
    constructor(name, age){
    //     this.name = name;
    // this.age = age;
    // this.speed = 0;
    super(name);
    this.age = age;
    }
}
const man = new Human('bachan Kubi', 10)
console.log(man);
// overriding class fields 
class JolerPrani{
    name="kumir";
    constructor(){
        console.log(this.name);
    }
}

class Timi extends JolerPrani{
    name= 'katla';
}
console.log(new JolerPrani());
console.log(new Timi());

class Pani {
    name = "Pani"
    showPani(){
        console.log('pani');
    }
    constructor(){
        this.showPani()
    }
}
class Tel extends Pani{
    showPani(){
        console.log('tel');
    }
};
const ani = new Pani();
ani.showPani();

const jani = {
    name: 'Jani',
    eat(){
        console.log(`${this.name} eats`);
    }
}
const mani = {
    __proto__: jani,
    name: "Mani",
    eat(){
        // this.__proto__.eat.call(this);
        super.eat()
    }
}
const kori = {
    __proto__: mani,
    name: "Kori",
    eat(){
        super.eat()
        // this.__proto__.eat.call(this);
    }
}
mani.eat();
// this calling wouldnt work as calling from same context. 
kori.eat();






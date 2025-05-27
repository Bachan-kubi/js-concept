class Dog{
    constructor(name, breed, age, origin){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.origin = origin;
    }
    tellYourself(){
        console.log(`I am ${this.name}, from ${this.breed} and age is ${this.age} years old! originated from ${this.origin}`);
    }
    woof(){
        console.log(`${this.name} Woof woof wooof!!`);
    }
    run(){
        console.log(`${this.name} can run fast!`);
    }
}

const fido = new Dog('Fido', 'shephard', 20, "German");
const lido = new Dog("Lido", 'desi', 25, "Bangladesh");
fido.tellYourself();
lido.tellYourself();
fido.woof("Fido");
console.log(fido);
document.getElementById('demo2').innerHTML = fido

class Cat{
    constructor(name, breed, age, origin){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.origin = origin
    }
    meow(){
        console.log('mewo, meow!');
    }
}
const pussy = new Cat("Mimi", "desi", 25, "Bangladesh");

fido.tellYourself.call(pussy);
fido.run.apply(pussy);
fido.run.call(pussy);
const newMimi = fido.run.bind(pussy);
console.log(fido.run.bind(pussy));
newMimi();
fido.woof.call(pussy);

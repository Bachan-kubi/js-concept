class User {
    constructor(name, job, age, details){
        this.name = name;
        this.job = job;
        this.age = age;
        this.details = details;
    }
    drive(){
        console.log(`${this.name} can drive car at ${this.age} after leaving his ${this.job} ${this.details}`);
    }

}
const pitchi = {
    name: "kubi",
    job: 'curi',
    age: 40,
    details: 'living in birisiri, and get the world to get eneo'
}
const bachan = new User(pitchi.name, pitchi.job, pitchi.age, pitchi.details)
bachan.drive();


class Bachan extends User{
    stop(){
        console.log(`${this.name} stops`);
    }
}
let kubi = new Bachan(pitchi.name, pitchi.job, pitchi.age, pitchi.details);
kubi.stop('ami');
kubi.drive();
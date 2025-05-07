class Car{
    constructor(name){
        this.name = name;
    };
    static helo(v){
        console.log('say statics', v);
    }
}
let me = new Car("ford");
Car.helo('k')
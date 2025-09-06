// static method are callable on class not on object. when we call static method from object it will create an error for having not a fucntion.
class Car{
    constructor(name){
        this.name = name;
    };
    static helo(v){
        console.log('say statics', v);
    }
}
let me = new Car("ford");
// Car.helo('k')


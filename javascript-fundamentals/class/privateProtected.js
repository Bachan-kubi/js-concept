class CoffeeMachine {
    _waterAmount = 0;
    constructor(power){
        this._power = power;
        console.log(`created a coffee machine, power: ${power}`);
    };
   set waterAmount(water){
    if(water<0){
        water = 0;
    }
    this._waterAmount = water;
   };
   get waterAmount(){
    return this._waterAmount;
   };
   get power(){
    return this._power
   }
   // private
   #waterLimit = 200;
   #fixWaterLimit(v){
    if(v<0) return 0;
    if(v>this.#waterLimit){
        return this.#waterLimit;
    }
    return this.#fixWaterLimit
   }
   set waterLimit(v){
    this.#waterLimit = this.#fixWaterLimit(v)
   }

}

let coffeeMachine = new CoffeeMachine(100);
console.log("private", CoffeeMachine.#fixWaterLimit(122));
coffeeMachine.waterAmount = 10;
// it accesible from outside of class and object too
console.log(coffeeMachine.waterAmount);
// only once the power will be adapted
console.log(CoffeeMachine.power);
// you cant set power as there is method to set or modify power
console.log(CoffeeMachine.power = 200);
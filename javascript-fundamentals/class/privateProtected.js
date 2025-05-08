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

}
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 10;
// it accesible from outside of class and object too
console.log(coffeeMachine.waterAmount);
// only once the power will be adapted
console.log(coffeeMachine.power);
// you cant set power as there is method to set or modify power
coffeeMachine.power = 200;
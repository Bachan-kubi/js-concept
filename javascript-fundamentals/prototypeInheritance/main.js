let animal = {
    eats: true,
    run(){
        console.log(`animal runs`);
    },
    play(){
        console.log('animal play');
    }
};
let rabbit = {
    jumps: true,
    hide(){
        console.log('it can hide in jungle');
    },
    __proto__:animal,
};
rabbit.play  = function(){
    console.log('rabits plays');
}
let earLong = {
    earLength :10,
    __proto__: rabbit
};
rabbit.play();
console.log(earLong);
rabbit.run();
console.log(rabbit);
function greet(name){
    return`Hellow! ${name}`
}
function userInput(callback){
    console.log(callback);
    let name = "Kubi";
    console.log(callback(name));
}
userInput(greet);

function multi(f){
    return function(n){
        return n*f;
    }
}
const double = multi(2);
console.log(double);
console.log(double(2));
let person = {
    firsName: 'Bachan',
    lastName: 'kubi',
    age: 20
}
let text = ''
for(let x in person){
    console.log(x);
text += person[x]+ " ";
}
let t=""
for(let [x] of Object.entries(person)){
    console.log("v",x);
}
const myObj = Object.values(person);
myObj.forEach(e=>{
    console.log("ki",e);
})

console.log(myObj);
document.getElementById('demo').innerHTML= myObj


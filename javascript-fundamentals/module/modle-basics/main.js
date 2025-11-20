import {greetings, name} from "./text.js";
import {add,substract,multiply} from "./mathes.js";
import { txt} from "./desc.js";

const display = document.getElementById("display");
const alert = document.getElementById("alrt");
console.log(display);
const total = add(10,20);
const sub = substract(20,10);
const multi = multiply(10,20); 
console.log(total,sub,multi);
const newText = txt();

display.innerHTML = `${greetings()}, ${name()}, total:${total}, sub: ${sub}, multi: ${multi}, 
<div>
    <h4>All Text: ${newText}<h4>
    <button id="alrt">Click</button>
<div>
`;

document.getElementById("alrt").addEventListener("click", ()=>{
    alert.innerHTML = txt();
});
;


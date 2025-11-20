import {greetings, name} from "./text.js";
console.log("Hello");
const display = document.getElementById("display");
console.log(display);
display.innerHTML = `${greetings()}, ${name()}`;


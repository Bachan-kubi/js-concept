import { nissan } from "./02_module.js";

function sayHi(){
    console.log('sayHI');
};

function amiChai(n){
    console.log(`${n}, i want you to know`);
}
export const model = nissan.aboutAll();

export{sayHi, amiChai}





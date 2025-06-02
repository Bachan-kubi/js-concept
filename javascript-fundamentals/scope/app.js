// global scope

let ami = 'kubi';
function amiScope(){
    console.log(ami);
}
amiScope();

function localScope(){
    let x = 'nai';
    console.log(x);
}

localScope();

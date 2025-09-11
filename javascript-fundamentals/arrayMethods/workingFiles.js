const fruits = ['apple', 'bannana', 'mangoo', 'grapes'];
let result  = '';

export function workingFiles() {
    // for(let i=0; i<fruits.length; i++)
    for(let fruit of fruits){
    // console.log(fruits[i]);
    result += fruit+" ";
}
console.log(result.trim());
}



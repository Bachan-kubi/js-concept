// ADD AND REMOVE ITEMS OF ARRAYS
// 1-splice
 const fruits = ['mangoo', 'apple', 'jackfruits',"pineapple"];

// add remove, replace
// splice method- takes 3 parameters: 1st one for indexing arrays elements, 2nd numbers to be deleted, 3rd is elements to be replaced.
// fruits.splice(-1,0,"boss", 'ros');
// fruits.splice(2,4)
// console.log(fruits);

//2- slice method
// const fruits = ['mangoo', 'apple', 'jackfruits',"pineapple"];
const sliced = fruits.slice(1,3);
console.log(sliced);
const fruit = ['mangoo', 'apple', 'jackfruits', 'pineapple'];
// indexes:    0        1          2           3
// fruits.slice(1,2):
// start = 1 → include index 1 ("apple")
// end = 2 → stop before index 2 (exclude "jackfruits")
Result: ["apple"]


//3- concate
const a = [1,2,3];
const b= [4,5,6];
const ab = a.concat(b);
console.log(ab);
// ITERATE ARRAYS
// forEach operations
const eachArr = ab.forEach((ar, index, array)=>{
    console.log(`${ar} and ${index} and ${array}`);
});
//4- indexOf/ includes
const findIndex = fruit.indexOf('pineapple')
console.log(findIndex);
console.log("includes", fruit.includes('pineapple'));

//5- find/findIndex/findLastIndex
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Peter"},
  {id: 3, name: "Marry"},
  {id: 4, name: "John"},
  {id: 5, name: "Johnn"}
];
let user = users.find((usr, index)=>{
    let newUser = usr.id===1;
    console.log(newUser, index);
});
let foundIndex = users.findIndex((usr, index)=>{
    let fInd = usr.name==="John";
    console.log(fInd, index);
});
let lastUsr = users.map((usr)=>{
    let luser = usr.name === "Mary";
    console.log(luser);
});

// 6- Filter Method

const allFilter = users.filter((usr, index)=>{
    return usr.name==="John";
});
console.log(allFilter);

// TRANSOFRM ARRAYS OF ELEMENTS
// 01- MAP
const t = users.map((usr, index)=>{
    return usr.name.length;
});
console.log(t);
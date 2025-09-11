// const fruits = ['mangoo', 'apple', 'jackfruits',"pineapple"];

// add remove, replace
// splice method- takes 3 parameters: 1st one for indexing arrays elements, 2nd numbers to be deleted, 3rd is elements to be replaced.
// fruits.splice(-1,0,"boss", 'ros');
// fruits.splice(2,4)
// console.log(fruits);

// slice method
const fruits = ['mangoo', 'apple', 'jackfruits',"pineapple"];
const sliced = fruits.slice(1,3);
console.log(sliced);
const fruit = ['mangoo', 'apple', 'jackfruits', 'pineapple'];
// indexes:    0        1          2           3
// fruits.slice(1,2):
// start = 1 → include index 1 ("apple")
// end = 2 → stop before index 2 (exclude "jackfruits")
Result: ["apple"]


// concate
const a = [1,2,3];
const b= [4,5,6];
const ab = a.concat(b);
console.log(ab);
// forEach operations
const eachArr = ab.forEach((ar, index, array)=>{
    console.log(`${ar} and ${index} and ${array}`);
});
// indexOf/ includes
const findIndex = fruit.indexOf('pineapple')
console.log(findIndex);

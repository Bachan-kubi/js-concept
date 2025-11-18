let numbers = [10, 9, 12, 13];
let newNumber = numbers.filter(f=>f%2===0);
console.log(newNumber);
let users = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 17 },
  { name: "Karim", age: 35 },
  { name: "Salam", age: 30 }
];
// const newUsers = users.filter(user=>{
//     return user.name==="Karim"
// });

// console.log(newUsers);
let txt = users.filter(usr=>{
    return usr.name.includes("ala")
});
console.log(txt);

const arr= [10, 55, 32, 80, 99, 12];
let newArr = arr.filter(ar=>{
    let a = ar>50;
    return a
});
console.log(newArr);
const even = [1, 2, 3, 4, 5, 6, 7, 8];
let r = even.filter(ev=>{
    return ev%2===0
});
console.log(r);
const str = ["Alice", "Bob", "Amir", "Kamal", "Asha"]
let newStr = str.filter(s=>{
    return s.startsWith("A")
});
console.log(newStr);
const std = [
  { name: "Boni", score: 75 },
  { name: "Samin", score: 92 },
  { name: "Tina", score: 81 },
  { name: "Rafi", score: 60 }
];
const stdr = std.filter(st=>{
    return st.score>=80
});
console.log(stdr);

const activeUsers = [
  { name: "Rahim", active: true },
  { name: "Karim", active: false },
  { name: "Salam", active: true },
  { name: "Jamil", active: false }
]
const activRest = activeUsers.filter(au=>{
    return au.active===true;
});
console.log(activRest);
const num = [12, "hello", true, 99, null, 43, "js", {}];
const results = num.filter(n=>typeof(n)==="number");
console.log(results);

const sal = [
  { name: "Arafat", dept: "IT", salary: 25000 },
  { name: "Bappa", dept: "HR", salary: 28000 },
  { name: "Sujon", dept: "IT", salary: 18000 },
  { name: "Nila", dept: "IT", salary: 30000 }
];
const salCount = sal.filter(s=>{
    return s.dept==="IT" && s.salary>20000;
}); 
console.log(salCount);


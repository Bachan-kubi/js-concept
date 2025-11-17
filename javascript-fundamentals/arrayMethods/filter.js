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
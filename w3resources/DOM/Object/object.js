// fixed layout object
const learnObj = {
  subj: "Js",
  course: 10,
  start: "1 Jan",
  ended: "31 Dec",
};

const copyObj = {
  ...learnObj,
  startNow() {
    return `${this.start}`;
  },
};
// console.log(learnObj);
// dictionary object
const dicObj = {
  ["one"]: 1,
  ["two"]: "two",
};
const nObj = Object.values(copyObj);
const nOb = Object.keys(copyObj);
// console.log(nObj, nOb);

// object literal - Method

const ObjLiteal = {
    first: 'Jane',
    last: 'Doe',
    get full(){
        return `${this.first} ${this.last}`
    },
    set full(txt){
        [this.first, this.last]= txt.split(' ');
    }
};
for (let code in ObjLiteal){
    console.log(code);
}
ObjLiteal.full = "Bachan kubi"
ObjLiteal.full = "Ruma Baul"
console.log(ObjLiteal.full);

const user ={
    name: "John",
    surname: "Smith"
}
user.name = 'Kubi';
const newUser = delete user.name;
console.log(user)

// prototype inherited
let animal = {
  eat: true,
  walk(){
    console.log("it can walk!");
  },
  milk(){
    console.log("It gives us fertilizer!");
  }
}
let rabbit = {
  jums: true,
  __proto__: animal
};
// rabbit.walk();
console.log(rabbit.eat);
rabbit.milk();
rabbit.walk = function(){
  console.log('new task added!!');
};
rabbit.walk();

let users = {
  name: "Kubi",
  surname: "Bachan",
  set fullName(value){
    [this.name, this.surname]= value.split(' ')
  },
  get fullName(){
    return `${this.name} ${this.surname}`
  }
};
let admin = {
  __proto__: users,
  isAdmin: true
};

console.log(admin.fullName);
admin.fullName = "ami nai";
console.log(admin.fullName);

const mapping = new Map();

mapping.set(1, 'ki')
mapping.set('1', 'ki')
mapping.set(true, 'hoy');

console.log(mapping);
console.log(mapping.get(true));
for(let k of mapping){
  console.log(k);
}


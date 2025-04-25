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

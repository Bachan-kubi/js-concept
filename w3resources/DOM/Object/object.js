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
console.log(learnObj);
// dictionary object
const dicObj = {
  ["one"]: 1,
  ["two"]: "two",
};
console.log(dicObj.one);

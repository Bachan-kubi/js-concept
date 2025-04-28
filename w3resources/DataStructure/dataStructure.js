const stack  = [];
stack.push('10');
stack.push('ami');
stack.push(true);
console.log(stack);
stack.pop();
console.log(stack);
stack.push('e');
stack.push('f');
stack.push('g');
stack.push('h');
stack.pop()
console.log(stack);
// queue
const queue = [];
queue.push('a')
queue.push('b')
queue.push('c')
queue.push('d')
console.log(queue.unshift(10));

const arr = ['1', 2, 3, 4, 50];
const [fisr, s, t, ...a] = arr;
t;
s
a
console.log(arr.indexOf(2, ));
console.log(arr.lastIndexOf(50, ));
console.log(arr.indexOf(2, ));
console.log(arr.findIndex(item=>item===2));
console.log(arr.find(val=>val===2));
const people = [
    {name: 'kubi'},
    {name: 'robi'}
];
people.find(m=>m.name === 'kubi');
people
people;
people.name = 'ami';
people;
people
const number = [10, -20, 5, 44, 5];
const r = number.some(v=>v<10);
console.log(r);

const allPos = number.filter(v=>v<0);
console.log(allPos);

import { add, subtract } from './math.js';
import User from './user.js';
import * as Constants from './constants.js';

console.log(`App Name: ${Constants.APP_NAME}`);

const sum = add(10, 5);
console.log(`10 + 5 = ${sum}`);

const difference = subtract(10, 5);
console.log(`10 - 5 = ${difference}`);

const user = new User('Alice');
console.log(user.sayHello());

console.log(`Value of PI: ${Constants.PI}`);

// step - 01
//  class keyword: How to declare a class.
// constructor() method: What it is, why it's special, and how it initializes object properties with this.
// Methods: How to define functions within a class that all instances will share.
// new keyword: How to create an "instance" of a class.
// Basic Class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  updateScore(points) {
    this.score += points;
    console.log(`${this.name} now has a score of ${this.score}.`);
  }
}

const userOne = new User("Alice", "alice@example.com");
userOne.greet(); // "Hello, my name is Alice."
userOne.updateScore(10); // "Alice now has a score of 10."

// Step 2: Understand Inheritance (The "How It Connects")
// This is where the "deep" learning begins. Classes in JS are built on top of something else.
// extends keyword: How to create a subclass that inherits from a parent class.
// super() keyword:
// Using super() inside the constructor: How and why you must call the parent constructor.
// Using super. inside methods: How to call a method from the parent class (e.g., super.parentMethod()).
// Method Overriding: How a subclass can provide its own specific implementation of a method that already exists in its parent.
// Inheritance
class Admin extends User {
  constructor(name, email, permissions) {
    // 1. Call the parent constructor to set up 'name' and 'email'
    super(name, email);
    
    // 2. Add new properties specific to Admin
    this.permissions = permissions;
  }

  // 3. Add a new method
  deleteUser(user) {
    console.log(`${this.name} has removed ${user.name}.`);
  }

  // 4. Override the parent's greet method
  greet() {
    super.greet(); // Optionally call the parent's method first
    console.log("I am an administrator.");
  }
}

const adminOne = new Admin("Bob", "bob@admin.com", ["delete_users", "edit_posts"]);
adminOne.greet();
"Hello, my name is Bob."
"I am an administrator."

// Step 3: Go Deeper - Under the Hood (The "Why It Works")
// This is the most critical step for a deep understanding. JavaScript classes are "syntactic sugar" over prototypal inheritance.
// Prototypes: Understand that JavaScript uses prototypes, not classical inheritance. When you call a method on an instance (e.g., userOne.greet()), JavaScript looks for greet on the userOne object itself. If it doesn't find it, it looks up the prototype chain to User.prototype.
// The prototype Property: Every function (and thus every class) has a prototype property, which is an object. Methods defined in a class are actually added to this prototype object.
// __proto__ and Object.getPrototypeOf(): An instance's __proto__ property points to the class's prototype object. This is the link in the prototype chain.
// How new Really Works: The new keyword does four main things:
// Creates a new, empty object {}.
// Sets that object's prototype (__proto__) to the class's prototype (e.g., User.prototype).
// Calls the constructor function with the this keyword bound to the new object.
// Returns the newly created object (unless the constructor explicitly returns another object).
// Mental Model Check: After learning this, you should be able to rewrite a class using only plain constructor functions and prototype, like this:
// The old way - this is what a class does internally
function OldUser(name) {
    this.name = name;
}

OldUser.prototype.greet = function() {
    console.log(`Hello from ${this.name}`);
}

const oldUser = new OldUser("Charlie");
oldUser.greet(); // Works because greet is on the prototype!
// Step 4: Advanced & Modern Class Features (The "Power-Ups")
// These features provide more control, privacy, and convenience.
// Getters and Setters: Use get and set keywords to create computed properties or run code when a property is accessed or changed.
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this._celsius = (value - 32) / 1.8;
  }
}
const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77 (runs the getter)
temp.fahrenheit = 86; // runs the setter
console.log(temp._celsius); // 30
// Static Methods & Properties: Methods/properties that belong to the class itself, not to instances. They are called directly on the class (e.g., User.createGuest()). Useful for utility functions.
class MathHelper {
  static PI = 3.14159;
  static add(a, b) { return a + b; }
}
console.log(MathHelper.PI); // 3.14159
console.log(MathHelper.add(5, 10)); // 15
// Private Fields and Methods (#): The # prefix makes a field or method truly private to the class. It cannot be accessed from outside. This is a modern and crucial feature for encapsulation.
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    if (this.#isValid(amount)) {
      this.#balance += amount;
    }
  }
  
  #isValid(amount) { // Private method
    return amount > 0;
  }

  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount();
account.deposit(100);
// console.log(account.#balance); // SyntaxError! It's private.
console.log(account.getBalance()); // 100

// In a file like Character.js
class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }
  attack(target) {
    console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);
    target.health -= this.attackPower;
  }
  isAlive() {
    return this.health > 0;
  }
}

class Player extends Character {
  constructor(name) {
    // Players are stronger than standard characters
    super(name, 100, 15); 
  }
}

class Enemy extends Character {
  constructor(name, health, attackPower) {
    super(name, health, attackPower);
  }
}

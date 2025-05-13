class User {
    static id = 10;
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.id = User.id++
  }
  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }
  static compareBySalary() {
    return user1.salary - user2.salary;
  }
}

const user1 = new User("ami", 50, 5000);
const user2 = new User("ami", 30, 4000);
const user3 = new User("ami", 40, 10000);
const users = [user1, user2, user3];
// users.sort((a,b)=>b.age - a.age)
// users.sort(User.compareByAge)
users.sort(User.compareBySalary);
const sta = new User("ami", 20, 2000);
console.log(sta, "ststic");
console.log(users);

class Config{
    static dbName = "dbName";
    static dbPassword = "dbPassword";
    static apiToken = "abcd"
};
const config = new Config();
console.log(Config.dbName);
console.log(Math);

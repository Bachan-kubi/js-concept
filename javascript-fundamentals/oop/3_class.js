class BankAccount{
    customerName;
    balance;
    accountNo;
    constructor(customerName, balance=0){
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    };
    withdrawal(amount){
        this.balance -= amount;
    }
}
const kubi = new BankAccount('kubi', 5000);
kubi.deposit(1000);
kubi.withdrawal(500);
console.log(kubi);
const elora = new BankAccount("elora", 500);
console.log(elora);
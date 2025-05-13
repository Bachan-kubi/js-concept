class BankAccount{
    customerName;
    #balance;
    accountNo;
    constructor(customerName, balance=0){
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount;
    };
    withdrawal(amount){
        this.#balance -= amount;
    }
}
const k = new BankAccount('k', 5000);
k.#balance="ji";
console.log(k);


class CurrentAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName, balance=0){
        super(customerName, balance);
    }
}
const ami = new CurrentAccount("ami", 500);
// console.log(ami);


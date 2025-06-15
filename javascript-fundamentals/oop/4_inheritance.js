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
class CurrentAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName, balance=0){
        super(customerName, balance);
    }
}
const ami = new CurrentAccount("ami", 500);
console.log(ami);

class SavingAccount extends CurrentAccount{
    constructor(customerName, balance=0){
    // Always call super() with the right arguments as required by the parent class's constructor. Since BankAccount needs a customerName, and CurrentAccount just passes it along, SavingAccount must do the same.
        super(customerName, balance);
    }
};
const se = new CurrentAccount('se', 2000);
console.log(se);
class BankAccount{
    // public property
    customerName;
    // private property
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
    };
    set balance(amount){
        // protected properties
        if(typeof amount !== "number"|| isNaN(amount)){
            throw new Error("This is not valid")
        }
        this.#balance += amount;
    };
    get balance(){
        return this.#balance;
    }
}
const k = new BankAccount('k', 5000);
k.balance=500;
console.log(k.balance);
console.log(k);


class CurrentAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName, balance=0){
        super(customerName, balance);
    }
}
const ami = new CurrentAccount("ami", 500);
// console.log(ami);


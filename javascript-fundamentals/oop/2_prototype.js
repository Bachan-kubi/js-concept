function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.balance = balance;

    // this.deposit= function(amount){
    //     this.balance += +amount;
    // };
    // this.withdrawal = function(amount){
    //     this.balance -= amount;
    // }
};
BankAccount.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.test = 'this is test';
console.log(BankAccount.prototype);
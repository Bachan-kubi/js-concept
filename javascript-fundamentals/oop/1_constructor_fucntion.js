function BankAccount(customerName, accountNo, balance=0) {
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.balance = balance;
    this.deposit = function(amount) {
        this.balance += amount
    };
    this.withdraw = function(amount) {
        this.deposit -= amount
    }
}
const bachansAccount = new BankAccount("Bachan Kubi", 5000);
const johnsAccount = new BankAccount("John Doe");
johnsAccount.balance = 2000;
johnsAccount.deposit(5000);
johnsAccount.withdraw(4000)
console.log(bachansAccount, johnsAccount);

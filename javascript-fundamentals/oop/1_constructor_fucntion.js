function BankAccount(customerName, balance=0) {
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.balance = balance;
    this.deposit = function(amount) {
        this.balance += amount;
    };
    this.withdraw = function(amount) {
        this.deposit -= amount
    }
}
// const bachansAccount = new BankAccount("Bachan Kubi", 5000);
// const johnsAccount = new BankAccount("John Doe");
// johnsAccount.balance = 2000;
// johnsAccount.deposit(5000);
// johnsAccount.withdraw(4000)
// console.log(bachansAccount, johnsAccount);

// =====================
const accounts = [];
const accountForm = document.querySelector("#bank-form");
const customerName = document.querySelector("#custormerName");
const balance = document.querySelector("#balance");
accountForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});
// deposit
const depositForm = document.querySelector("#depositForm");
const accountNo = document.querySelector("#accountNo");
const depositAmount = document.querySelector("#deposit-amount");

depositForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const account = accounts.find((account)=>account.accountNo ===+accountNo.value);
    account.deposit(+depositAmount.value);
    console.log(accounts);
})


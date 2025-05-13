// constructor function
function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.balance = balance;

    this.deposit= function(amount){
        this.balance += +amount;
    };
    this.withdrawal = function(amount){
        this.balance -= amount;
    }
};

// const kubi = new BankAccount('kubi', 1000);
// const robi = new BankAccount('robi', 1000);
// kubi.balance = 5000;
// kubi.deposit(500);
// robi.withdrawal(500)
// console.log(robi);
// console.log(kubi);

const accounts = [];
const accountForm = document.querySelector("#account-form");
const customer = document.querySelector("#customer-name");
const balance = document.querySelector("#amount");
const depositForm = document.querySelector("#deposit-form");
const accountNo = document.querySelector("#accountNo");
const deposit = document.querySelector("#deposit");

accountForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const account = new BankAccount(customer.value, +balance.value)
    accounts.push(account);
    console.log(accounts);
});

depositForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const account = accounts.find((a)=>a.accountNo === +accountNo.value);
    account.deposit(deposit.value);
    console.log(account);
})





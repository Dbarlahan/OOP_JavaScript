class BankAccount {
    constructor(name, interestRate = 0.01, balance = 0) {
        this.accountName = name
        this.interestRate = interestRate
        this.balance = balance
    }
    yieldInterest() {
        this.balance += this.balance * this.interestRate;
        return this;
    }
}

class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.account = {}
    }
    createAccount(newAccountName) {
        this.account[newAccountName] = new BankAccount;
        return this;
    }
    makeDeposit(amount, newAccountName) {
        this.account[newAccountName].balance += amount;
        return this;
    }
    makeWithdrawal(amount, newAccountName) {
            if (this.account[newAccountName].balance >= amount) {
                this.account[newAccountName].balance -= amount;
            }
            else {
                console.log('Insufficient funds: Charging a $5 fee');
                this.account[newAccountName].balance -= 5;
            }
            return this;
    }
    displayBalance(newAccountName) {
        console.log("User: " + this.name + " Account Type: " + newAccountName + ", Balance: $" + this.account[newAccountName].balance);
        return this;
    }
}

const Blossom = new User("Blossom", "blossom@powerpuffgirls.com");
const Bubbles = new User("Bubbles", "bubbles@powerpuffgirls.com");
const Buttercup = new User("Buttercup", "buttercup@powerpuffgirls.com");

Blossom.createAccount('Personal').createAccount('Business').makeDeposit(100, 'Personal').makeDeposit(500, 'Business').makeWithdrawal(600, 'Business').displayBalance('Personal').displayBalance('Business')
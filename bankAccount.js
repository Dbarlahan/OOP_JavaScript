class BankAccount {
    constructor(name, interestRate = 0.01, balance = 0) {
        this.accountName = name
        this.interestRate = interestRate
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log('Insufficient funds: Charging a $5 fee');
            this.balance -= 5;
        }
        return this;
    }
    displayAccountInfo() {
        console.log(
            (this.accountName) + '|' + 'Balance: $' + (this.balance)
        );
        return this;
    }
    yieldInterest() {
        this.balance += this.balance * this.interestRate;
        return this;
    }
}

const personal =  new BankAccount("Personal Savings Account", undefined, 1000);
const business = new BankAccount("Business Savings Account", 0.05);

personal.deposit(100).deposit(100).deposit(100).withdraw(50).yieldInterest().displayAccountInfo()
business.deposit(500).deposit(500).withdraw(100).withdraw(50).withdraw(50).withdraw(50).yieldInterest().displayAccountInfo()
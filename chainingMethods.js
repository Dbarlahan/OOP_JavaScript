class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }
    displayBalance() {
        console.log("User: " + this.name + ", Balance: $" + this.accountBalance)
        return this;
    }
    transferMoney(otherUser, amount) {
        otherUser.accountBalance += amount;
        this.accountBalance -= amount;
        return this;
    }
}

const Blossom = new User("Blossom", "blossom@powerpuffgirls.com");
const Bubbles = new User("Bubbles", "bubbles@powerpuffgirls.com");
const Buttercup = new User("Buttercup", "buttercup@powerpuffgirls.com");

Blossom.makeDeposit(100).makeDeposit(200).makeDeposit(300).makeWithdrawal(400).displayBalance()

Bubbles.makeDeposit(1000).makeDeposit(2000).makeWithdrawal(500).makeWithdrawal(100).displayBalance()

Buttercup.makeDeposit(1000).makeWithdrawal(100).makeWithdrawal(50).makeWithdrawal(10).displayBalance()

Blossom.transferMoney(Buttercup, 100).displayBalance()
Buttercup.displayBalance()
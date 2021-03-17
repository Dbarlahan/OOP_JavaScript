class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }
    displayBalance() {
        console.log("User: " + this.name + ", Balance: $" + this.accountBalance)
    }
    transferMoney(otherUser, amount) {
        otherUser.accountBalance += amount;
        this.accountBalance -= amount;
    }
}

const Blossom = new User("Blossom", "blossom@powerpuffgirls.com");
const Bubbles = new User("Bubbles", "bubbles@powerpuffgirls.com");
const Buttercup = new User("Buttercup", "buttercup@powerpuffgirls.com");

Blossom.makeDeposit(100)
Blossom.makeDeposit(200)
Blossom.makeDeposit(300)
Blossom.makeWithdrawal(400)
Blossom.displayBalance()

Bubbles.makeDeposit(1000)
Bubbles.makeDeposit(2000)
Bubbles.makeWithdrawal(500)
Bubbles.makeWithdrawal(100)
Bubbles.displayBalance()

Buttercup.makeDeposit(1000)
Buttercup.makeWithdrawal(100)
Buttercup.makeWithdrawal(50)
Buttercup.makeWithdrawal(10)
Buttercup.displayBalance()

Blossom.transferMoney(Buttercup, 100)
Blossom.displayBalance()
Buttercup.displayBalance()
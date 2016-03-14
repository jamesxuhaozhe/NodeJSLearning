var accounts = [];

function addToAccounts (account) {
	accounts.push(account);
	return account;
}

function getAccountByName(username) {
	var matchedAccount;
	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

function deposit (account, amount) {
	if (typeof amount === "number") {
		account.balance += amount;	
	} else {
		console.log("Deposit failed, amount should be a number");
	}
}

function withdraw (account, amount) {
	if (typeof amount === "number") {
		account.balance -= amount;	
	} else {
		console.log("Withdraw failed, amount should be a number");
	}
}

function getBalance (account) {
	return account.balance;
}

function createBalanceGetter(account) {
	return function() {
		return account.balance;
	}
}

var jamesAccount = addToAccounts({
	username: "James",
	balance: 1000
});

withdraw(jamesAccount, "s");
var jamesBalanceGetter = createBalanceGetter(jamesAccount);
console.log(jamesBalanceGetter());

/**
 * Created by haozhexu on 3/13/16.
 */
console.log("Here we are starting our password manager application!");

var storage = require('node-persist');
storage.initSync();

/*
    account.name = "Facebook"
    account.username = "xxx@gmail.com"
    account.password = "123"
 */

function createAccount(account) {
    var accounts = storage.getItemSync('accounts');
    if (typeof accounts === 'undefined') {
        accounts = [];
    }
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
}

function getAccount(accountName) {
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function(account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

createAccount({
    name: "Facebook",
    username: "james@gmail.com",
    password: "123"
});

console.log(getAccount("Facebook"));
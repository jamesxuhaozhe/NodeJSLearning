/**
 * Created by haozhexu on 3/13/16.
 */
// local data store to keep all the account information
var localStorage = require('node-persist');
var crypto = require('crypto-js');
localStorage.initSync();

var argv = require('yargs')
    .command('create', 'Create an account.', function(yargs) {
        yargs.options({
           accountname: {
               demand: true,
               alias: 'n',
               description: 'Name of your account(eg: Facebook, Gmail).',
               type: 'string'
           },
           username: {
               demand: true,
               alias: 'u',
               description: 'Username of your account(eg: Fatman89)',
               type: 'string'
           },
           password: {
               demand: true,
               alias: 'p',
               description: 'Password of your account(eg: pasword1123).',
               type: 'string'
           },
           masterkey: {
               demand: true,
               alias: 'e',
               description: 'Master key used to encrypt and decrypt message.',
               type: 'string'
           }
        }).help('help')
    })
    .command('get', 'Get an account.', function(yargs) {
        yargs.options({
            accountname: {
                demand: true,
                alias: 'n',
                description: 'Name of your account(eg: Facebook, Gmail).',
                type: 'string'
            },
            masterkey: {
                demand: true,
                alias: 'e',
                description: 'Master key used to encrypt and decrypt message.',
                type: 'string'
            }
        }).help('help')
    }).help('help')
    .argv;

var command = argv._[0];

function getDecryptedAccounts(masterKey) {
    var encryptedAccounts = localStorage.getItemSync('accounts');
    var accounts = [];
    if (typeof encryptedAccounts !== 'undefined') {
        var bytes = crypto.AES.decrypt(encryptedAccounts, masterKey);
        accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
    }
    return accounts;
}

function saveAndEncryptAccounts(accounts, masterKey) {
    var encryptAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterKey);
    localStorage.setItemSync('accounts', encryptAccounts.toString());
}

function createAccount(account, masterKey) {
    var accounts = getDecryptedAccounts(masterKey);
    accounts.push(account);
    saveAndEncryptAccounts(accounts, masterKey);
    console.log('Account has been created and stored..');
}

function getAccount(accountName, masterKey) {
    var accounts = getDecryptedAccounts(masterKey);
    var matchedAccount;
    accounts.forEach(function(account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

if (command === 'create') {
    createAccount({
        name: argv.accountname,
        username: argv.username,
        password: argv.password
    }, argv.masterkey);
}

if (command === 'get') {
    console.log(getAccount(argv.accountname, argv.masterkey));
}


/**
 * Created by haozhexu on 3/13/16.
 */
var argv = require('yargs')
    .command('Hello', 'Greets the user', function(yargs) {
        yargs.options({
            firstname: {
                demand: true,
                alias: 'f',
                description: 'Your firstname goes here'
            },
            lastname: {
                demand: true,
                alias: 'l',
                description: 'Your lastname goes here'
            }
        }).help('help')
    })
    .help('help')
    .argv;

var defaultFirstName;
var defaultLastName;

if (typeof argv.firstname !== 'undefined' && typeof argv.lastname !== 'undefined') {
    defaultFirstName = argv.firstname;
    defaultLastName = argv.lastname;
}

if (typeof argv.firstname === 'undefined') {
    defaultFirstName = 'Yo';
    defaultLastName = argv.lastname;
}

if (typeof  argv.lastname === 'undefined') {
    defaultFirstName = argv.firstname;
    defaultLastName = 'Yo';
}

console.log('Hello ' + 'FirstName: ' + defaultFirstName + ' ' + 'LastName: ' + defaultLastName);
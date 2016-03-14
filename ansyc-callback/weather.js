/**
 * Created by haozhexu on 3/13/16.
 */
var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=b1b15e88fa797225412429c1c50c122a';

module.exports = function(callback) {
    request({
        url: url,
        json: true
    }, function(error, response, body) {
        if (error) {
            console.log('Unable to get the Weather data');
        } else {
            callback('City name is: ' + body.name + ' And the temp is: ' + body.main.temp);
        }
    });
}
/**
 * Created by haozhexu on 3/13/16.
 */
var weather = require('./weather.js');
var location = require('./location.js');

weather(function(currentWeather) {
    console.log(currentWeather);
});

location(function(location) {
    if (!location) {
        console.log('Unable to guess the city');
        return;
    }
    console.log('City:' + ' ' + location.city);
});
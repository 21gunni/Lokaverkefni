// Requiring json data
var novaJson = require('../../nova');
var vodafoneJson = require('../../vodafone');
var twoForOneJson = require('../../twoForOne');

// A function that returns a random nova place
function randomNova() {
    var randomPlace = novaJson.novaPlaces[Math.floor(Math.random() * novaJson.novaPlaces.length)];
    return randomPlace;
}

// A function that returns a random vodafone place
function randomVodafone() {
    var randomPlace = vodafoneJson.vodafonePlaces[Math.floor(Math.random() * vodafoneJson.vodafonePlaces.length)];
    return randomPlace;
}

// A function that returns a random twoForOne place
function randomTwoForOne() {
    var randomPlace = twoForOneJson.twoForOnePlaces[Math.floor(Math.random() * twoForOneJson.twoForOnePlaces.length)];
    return randomPlace;
}


module.exports = {
    randomNova,
    randomVodafone,
    randomTwoForOne
};
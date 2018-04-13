// Requiring json data
var novaJson = require('../../nova');
var vodafoneJson = require('../../vodafone');
var twoForOneJson = require('../../twoForOne');


// All Random functions

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

// A function that returns a random place from all places
function randomAll() {
    var random = [];
    random.push(randomNova());
    random.push(randomVodafone());
    random.push(randomTwoForOne());
    var allRandom = random[Math.floor(Math.random() * random.length)];
    return allRandom;
}



module.exports = {
    randomNova,
    randomVodafone,
    randomTwoForOne,
    randomAll
};
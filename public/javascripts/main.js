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


// Navbar functions
function navbarShrink() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// A function that returns places for chosen day of the week
function weekDay(place, day) {
  switch (place) {
    case 'nova':
      var mon = [];
      if (day === 'mán') {
        novaJson.novaPlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              mon.push(p);
            }
          });
        });
        return mon;
      } else if (day === 'þri') {
        var tue = [];
        novaJson.novaPlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              tue.push(p);
            }
          });
        });
        return tue;
      } else if (day === 'mið') {
        var wed = [];
        novaJson.novaPlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              wed.push(p);
            }
          });
        });
        return wed;
      } else if (day === 'fim') {
        var thu = [];
        novaJson.novaPlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              thu.push(p);
            }
          });
        });
        return thu;
      } else if (day === 'fös') {
        var fri = [];
        novaJson.novaPlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              fri.push(p);
            }
          });
        });
        return fri;
      } else if (day === 'lau') {
        var sat = [];
        novaJson.novaPlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              sat.push(p);
            }
          });
        });
        return sat;
      } else if (day === 'sun') {
        var sun = [];
        novaJson.novaPlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              sun.push(p);
            }
          });
        });
        return sun;
      }
      break;
    case 'vodafone':
      var mon = [];
      if (day === 'mán') {
        vodafoneJson.vodafonePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              mon.push(p);
            }
          });
        });
        return mon;
      } else if (day === 'þri') {
        var tue = [];
        vodafoneJson.vodafonePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              tue.push(p);
            }
          });
        });
        return tue;
      } else if (day === 'mið') {
        var wed = [];
        vodafoneJson.vodafonePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              wed.push(p);
            }
          });
        });
        return wed;
      } else if (day === 'fim') {
        var thu = [];
        vodafoneJson.vodafonePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              thu.push(p);
            }
          });
        });
        return thu;
      } else if (day === 'fös') {
        var fri = [];
        vodafoneJson.vodafonePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              fri.push(p);
            }
          });
        });
        return fri;
      } else if (day === 'lau') {
        var sat = [];
        vodafoneJson.vodafonePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              sat.push(p);
            }
          });
        });
        return sat;
      } else if (day === 'sun') {
        var sun = [];
        vodafoneJson.vodafonePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              sun.push(p);
            }
          });
        });
        return sun;
      }
      break;
    case 'twoForOne':
      var mon = [];
      if (day === 'mán') {
        twoForOneJson.twoForOnePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              mon.push(p);
            }
          });
        });
        return mon;
      } else if (day === 'þri') {
        var tue = [];
        twoForOneJson.twoForOnePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              tue.push(p);
            }
          });
        });
        return tue;
      } else if (day === 'mið') {
        var wed = [];
        twoForOneJson.twoForOnePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              wed.push(p);
            }
          });
        });
        return wed;
      } else if (day === 'fim') {
        var thu = [];
        twoForOneJson.twoForOnePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              thu.push(p);
            }
          });
        });
        return thu;
      } else if (day === 'fös') {
        var fri = [];
        twoForOneJson.twoForOnePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              fri.push(p);
            }
          });
        });
        return fri;
      } else if (day === 'lau') {
        var sat = [];
        twoForOneJson.twoForOnePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              sat.push(p);
            }
          });
        });
        return sat;
      } else if (day === 'sun') {
        var sun = [];
        twoForOneJson.twoForOnePlaces.forEach(p => {
          p.days.forEach(d => {
            if (d.name === day) {
              sun.push(p);
            }
          });
        });
        return sun;
      }
      break;
    default:
      // some code
      break;
  }
}



module.exports = {
  randomNova,
  randomVodafone,
  randomTwoForOne,
  randomAll,
  navbarShrink,
  weekDay
};



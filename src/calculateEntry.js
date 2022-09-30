const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  return entrants === undefined || Object.keys(entrants).length === 0
    ? 0
    : countEntrants(entrants).child * data.prices.child
    + countEntrants(entrants).adult * data.prices.adult
    + countEntrants(entrants).senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };

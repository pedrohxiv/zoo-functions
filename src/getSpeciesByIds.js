const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.length < 1 ? [] : data.species
    .map((animals) => animals)
    .filter((identifier) => ids.includes(identifier.id));
}

module.exports = getSpeciesByIds;

const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const oldestAnimal = data.species.find((element) => element.id === data.employees
    .find((element2) => element2.id === id).responsibleFor[0]).residents
    .map((element) => element.age).reduce((bigger, num) => ((bigger > num) ? bigger : num));
  return Object.values(data.species.find((element) => element.id === data.employees
    .find((element2) => element2.id === id).responsibleFor[0]).residents
    .find((element) => element.age === oldestAnimal));
}

module.exports = getOldestFromFirstSpecies;

const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const obj = {};
    data.species.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }
  if (Object.keys(animal).length === 2) {
    return data.species
      .find((element) => element.name === animal.specie)
      .residents.filter((element) => element.sex === animal.sex).length;
  }
  const concatAnimal = Object.values(animal).reduce((acc, curr) => acc + curr);
  return data.species.find((element) => element.name === concatAnimal).residents
    .length;
}

module.exports = countAnimals;

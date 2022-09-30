const data = require('../data/zoo_data');

function definedEmployeeObj(employee) {
  const concatEmployee = Object.values(employee).reduce((acc, curr) => acc + curr);
  const firName = data.employees.find((element) => element.firstName === concatEmployee || element
    .lastName === concatEmployee || element.id === concatEmployee).firstName;
  const lasName = data.employees.find((element) => element.firstName === concatEmployee || element
    .lastName === concatEmployee || element.id === concatEmployee).lastName;
  const verify = (element) => element.firstName === concatEmployee || element
    .lastName === concatEmployee || element.id === concatEmployee;
  return {
    id: data.employees.find(verify).id,
    fullName: `${firName} ${lasName}`,
    species: data.employees.find(verify).responsibleFor.map((element2) => data.species
      .find((element3) => element3.id === element2).name),
    locations: data.employees.find(verify).responsibleFor.map((element2) => data.species
      .find((element3) => element3.id === element2).location),
  };
}

function getEmployeesCoverage(employee) {
  // seu código aqui
  if (employee === undefined) {
    return data.employees.map((element) => ({
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: element.responsibleFor.map((element2) => data.species
        .find((element3) => element3.id === element2).name),
      locations: element.responsibleFor.map((element2) => data.species
        .find((element3) => element3.id === element2).location),
    }));
  }
  const concatEmployee = Object.values(employee).reduce((acc, curr) => acc + curr);
  if (!data.employees
    .some((element) => element.firstName === concatEmployee || element
      .lastName === concatEmployee || element.id === concatEmployee)) {
    throw new Error('Informações inválidas');
  }
  return definedEmployeeObj(employee);
}

module.exports = getEmployeesCoverage;

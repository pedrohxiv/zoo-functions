const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employeeName === undefined ? {} : data.employees.find(
    (element) =>
      element.firstName === employeeName || element.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;

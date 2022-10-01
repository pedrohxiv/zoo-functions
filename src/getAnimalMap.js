const data = require('../data/zoo_data');

const obj = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

function noIncludesNamesTrue() {
  obj.NE = data.species.filter((element2) => element2.location === 'NE')
    .map((element2) => element2.name);
  obj.NW = data.species.filter((element2) => element2.location === 'NW')
    .map((element2) => element2.name);
  obj.SE = data.species.filter((element2) => element2.location === 'SE')
    .map((element2) => element2.name);
  obj.SW = data.species.filter((element2) => element2.location === 'SW')
    .map((element2) => element2.name);
}

function includesNamesTrue() {
  obj.NE = data.species.filter((element2) => element2.location === 'NE')
    .map((element2) => ({
      [element2.name]: element2.residents.map((element3) => element3.name),
    }));
  obj.NW = data.species.filter((element2) => element2.location === 'NW')
    .map((element2) => ({
      [element2.name]: element2.residents.map((element3) => element3.name),
    }));
  obj.SE = data.species.filter((element2) => element2.location === 'SE')
    .map((element2) => ({
      [element2.name]: element2.residents.map((element3) => element3.name),
    }));
  obj.SW = data.species.filter((element2) => element2.location === 'SW')
    .map((element2) => ({
      [element2.name]: element2.residents.map((element3) => element3.name),
    }));
}

function includesSortedTrue() {
  obj.NE = data.species.filter((element2) => element2.location === 'NE')
    .map((element2) => ({
      [element2.name]: element2.residents.map((element3) => element3.name).sort(),
    }));
  obj.NW = data.species.filter((element2) => element2.location === 'NW')
    .map((element2) => ({
      [element2.name]: element2.residents.map((element3) => element3.name).sort(),
    }));
  obj.SE = data.species.filter((element2) => element2.location === 'SE')
    .map((element2) => ({
      [element2.name]: element2.residents.map((element3) => element3.name).sort(),
    }));
  obj.SW = data.species.filter((element2) => element2.location === 'SW')
    .map((element2) => ({
      [element2.name]: element2.residents.map((element3) => element3.name).sort(),
    }));
}

function includesMale() {
  obj.NE = data.species.filter((element2) => element2.location === 'NE').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'male')
      .map((element4) => element4.name),
  }));
  obj.NW = data.species.filter((element2) => element2.location === 'NW').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'male')
      .map((element4) => element4.name),
  }));
  obj.SE = data.species.filter((element2) => element2.location === 'SE').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'male')
      .map((element4) => element4.name),
  }));
  obj.SW = data.species.filter((element2) => element2.location === 'SW').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'male')
      .map((element4) => element4.name),
  }));
}

function includesFemale() {
  obj.NE = data.species.filter((element2) => element2.location === 'NE').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'female')
      .map((element4) => element4.name),
  }));
  obj.NW = data.species.filter((element2) => element2.location === 'NW').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'female')
      .map((element4) => element4.name),
  }));
  obj.SE = data.species.filter((element2) => element2.location === 'SE').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'female')
      .map((element4) => element4.name),
  }));
  obj.SW = data.species.filter((element2) => element2.location === 'SW').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'female')
      .map((element4) => element4.name),
  }));
}

function includesSex(options) {
  if (options.sex === 'male') {
    includesMale();
  }
  if (options.sex === 'female') {
    includesFemale();
  }
}

function includesMaleOrdened() {
  obj.NE = data.species.filter((element2) => element2.location === 'NE').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'male')
      .map((element4) => element4.name).sort(),
  }));
  obj.NW = data.species.filter((element2) => element2.location === 'NW').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'male')
      .map((element4) => element4.name).sort(),
  }));
  obj.SE = data.species.filter((element2) => element2.location === 'SE').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'male')
      .map((element4) => element4.name).sort(),
  }));
  obj.SW = data.species.filter((element2) => element2.location === 'SW').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'male')
      .map((element4) => element4.name).sort(),
  }));
}

function includesFemaleOrdened() {
  obj.NE = data.species.filter((element2) => element2.location === 'NE').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'female')
      .map((element4) => element4.name).sort(),
  }));
  obj.NW = data.species.filter((element2) => element2.location === 'NW').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'female')
      .map((element4) => element4.name).sort(),
  }));
  obj.SE = data.species.filter((element2) => element2.location === 'SE').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'female')
      .map((element4) => element4.name).sort(),
  }));
  obj.SW = data.species.filter((element2) => element2.location === 'SW').map((element2) => ({
    [element2.name]: element2.residents.filter((element3) => element3.sex === 'female')
      .map((element4) => element4.name).sort(),
  }));
}

function includesSexOrdened(options) {
  if (options.sex === 'male') {
    includesMaleOrdened();
  }
  if (options.sex === 'female') {
    includesFemaleOrdened();
  }
}

function verificationsName(options) {
  if (options.sorted === true) {
    includesSortedTrue();
    return obj;
  }
  if (options.includeNames === true) {
    includesNamesTrue();
    return obj;
  }
}

function verificationSex(options) {
  if (options.sex === 'male' || options.sex === 'female') {
    if (options.sorted === true) {
      includesSexOrdened(options);
      return obj;
    } includesSex(options);
    return obj;
  }
  verificationsName(options);
  return obj;
}

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined || !options.includeNames === true) {
    noIncludesNamesTrue();
    return obj;
  }
  verificationSex(options);
  return obj;
}

module.exports = getAnimalMap;

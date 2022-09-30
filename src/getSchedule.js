const data = require('../data/zoo_data');

const days = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species
      .filter((element) => element.availability.includes('Tuesday'))
      .map((element) => element.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species
      .filter((element) => element.availability.includes('Wednesday'))
      .map((element) => element.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species
      .filter((element) => element.availability.includes('Thursday'))
      .map((element) => element.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species
      .filter((element) => element.availability.includes('Friday'))
      .map((element) => element.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species
      .filter((element) => element.availability.includes('Saturday'))
      .map((element) => element.name),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species
      .filter((element) => element.availability.includes('Sunday'))
      .map((element) => element.name),
  },
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === 'Monday') {
    return { Monday: days.Monday };
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    const obj = {};
    obj[scheduleTarget] = {
      officeHour: days[scheduleTarget].officeHour,
      exhibition: days[scheduleTarget].exhibition,
    };
    return obj;
  }
  if (data.species.map((element) => element.name).includes(scheduleTarget)) {
    return data.species.find((element) => element.name === scheduleTarget)
      .availability;
  }
  return days;
}

module.exports = getSchedule;

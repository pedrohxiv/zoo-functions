const getOpeningHours = require('../src/getOpeningHours');
const data = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('Implemente uma função que recebe como argumentos um dia da semana e um horário, e retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora', () => {
    expect(getOpeningHours()).toBe(data.hours);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(new Error('The hour should represent a number'));
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(new Error('The minutes should represent a number'));
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});

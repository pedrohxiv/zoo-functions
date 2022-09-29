const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Implemente uma função que retorna informações referentes aos elefantes conforme o argumento passado', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
    expect(handlerElephants('availability')).toEqual([
      'Friday',
      'Saturday',
      'Sunday',
      'Tuesday',
    ]);
    expect(handlerElephants()).toBe(undefined);
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('car')).toBe(null);
  });
});

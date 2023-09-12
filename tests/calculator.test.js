const {calculator} = require('../src/calculator'); 
const { describe, test, expect } = require('@jest/globals');

describe('Calculator Testing', () => {
  test('add 1 and 1 to be equal to 2', () => {
    const result = calculator(1, 1, '+');
    expect(result).toBe(2);
  });

  test('subtract 3 and 2 to be equal to 1', () => {
    const result = calculator(3, 2, '-');
    expect(result).toBe(1);
  });

  test('multiply 4 and 5 to be equal to 20', () => {
    const result = calculator(4, 5, '*');
    expect(result).toBe(20);
  });

  test('divide 10 by 2 to be equal to 5', () => {
    const result = calculator(10, 2, '/');
    expect(result).toBe(5);
  });

  test('Invalid operator should return "Invalid Operator"', () => {
    const result = calculator(1, 1, '@'); // Using an invalid operator
    expect(result).toBe('Invalid Operator');
  });
});
import operate from '../operate';

describe('testing operation', () => {
  const operandOne = '2';
  const operandTwo = '5';

  // Addition
  test('test addition', () => {
    const result = operate(operandOne, operandTwo, '+');
    expect(result).toBe('7');
  });

  // Subtraction
  test('test subtraction', () => {
    const result = operate(operandOne, operandTwo, '-');
    expect(result).toBe('-3');
  });

  // Multiplication
  test('test multiplication', () => {
    const result = operate(operandOne, operandTwo, 'x');
    expect(result).toBe('10');
  });
});

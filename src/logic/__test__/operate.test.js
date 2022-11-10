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

  // Division
  test('test division', () => {
    const result = operate(operandTwo, operandOne, '÷');
    expect(result).toBe('2.5');
  });

  // mOD
  test('test mod', () => {
    const result = operate(operandTwo, operandOne, '%');
    expect(result).toBe('1');
  });
});

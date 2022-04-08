import { formatOperand } from '../utils';

describe('Expect formatOperand function to return correct value', () => {
  test('Correctly formats value based on input', () => {
    const result = formatOperand(1222235.000055);
    const expectResult = '1,222,235.000055';
    expect(result).toEqual(expectResult);
    const result2 = formatOperand(13656);
    const expectResult2 = '13,656';
    expect(result2).toEqual(expectResult2);
  });
});
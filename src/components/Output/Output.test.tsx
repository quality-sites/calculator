import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GlobalContext } from '../../context/GlobalState';
import { Output } from './Output';


test('Loads correct elements and values when output component loaded', () => {
  const InitialState = {
    currentOperand: 5,
    operation: '*',
    overwrite: true,
    previousOperand: 0,
    selectButton: () => {}
  };

  const { getByTestId } = render(
    <GlobalContext.Provider value={InitialState}>
      <Output />
    </GlobalContext.Provider>
  );
  
  const outputElement = getByTestId('output');
  const previousOperandElement = getByTestId('previous-operand');
  const currentOperandElement = getByTestId('current-operand');
  expect(outputElement).toBeInTheDocument()
  expect(outputElement).toHaveTextContent('0 *5');
  expect(previousOperandElement).toBeInTheDocument()
  expect(previousOperandElement).toHaveTextContent('0 *');
  expect(currentOperandElement).toBeInTheDocument()
  expect(currentOperandElement).toHaveTextContent('5');
});

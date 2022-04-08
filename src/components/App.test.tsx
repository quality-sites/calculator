import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('Displays the correct values when buttons are clicked', () => {
  const { getByTestId } = render(
    <App />
  );
  
  fireEvent.click(screen.getByText(/1/i));  
  expect(getByTestId('output')).toHaveTextContent('1');
  fireEvent.click(screen.getByText(/\*/i));
  expect(getByTestId('previous-operand')).toHaveTextContent('1 *');
  fireEvent.click(screen.getByText(/2/i));
  expect(getByTestId('current-operand')).toHaveTextContent('2');
  fireEvent.click(screen.getByText(/=/i));
  expect(getByTestId('current-operand')).toHaveTextContent('2');

  fireEvent.click(screen.getByText(/AC/i));
  expect(getByTestId('output')).toHaveTextContent('');
  expect(getByTestId('previous-operand')).toHaveTextContent('');
  expect(getByTestId('current-operand')).toHaveTextContent('');

  fireEvent.click(screen.getByText(/2/i));  
  expect(getByTestId('output')).toHaveTextContent('2');
  fireEvent.click(screen.getByText(/\+/i));
  expect(getByTestId('previous-operand')).toHaveTextContent('2 +');
  fireEvent.click(screen.getByText(/4/i));
  expect(getByTestId('current-operand')).toHaveTextContent('4');
  fireEvent.click(screen.getByText(/=/i));
  expect(getByTestId('current-operand')).toHaveTextContent('6');

  fireEvent.click(screen.getByText(/DEL/i));
  expect(getByTestId('output')).toHaveTextContent('');
  expect(getByTestId('previous-operand')).toHaveTextContent('');
  expect(getByTestId('current-operand')).toHaveTextContent('');
});
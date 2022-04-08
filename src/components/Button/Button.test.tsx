import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

test('Button component returns correct label when loaded', () => { 
    const { getByTestId } = render(
     <Button symbol='AC' dispatch={{ type: 'CLEAR' }} />
    );
    const buttonElement = getByTestId('button');
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('AC');
});
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { formatOperand } from '../../utils/utils';

export const Output = () => {
  const { operation, previousOperand, currentOperand } = useContext(GlobalContext);
  return (
    <div
      className="output"
      data-testid="output"
    >
      <div
        className="previous-operand"
        data-testid="previous-operand"
      >
        {formatOperand(previousOperand)} {operation}
      </div>
      <div
        className="current-operand"
        data-testid="current-operand"
      >
        {formatOperand(currentOperand)}
      </div>
    </div>
  );
}
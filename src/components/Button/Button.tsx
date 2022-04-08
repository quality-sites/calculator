import { FC, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { IButtonProps } from '../../types/types';

export const Button: FC<IButtonProps> = ({ symbol, dispatch }) => {
  const { selectButton } = useContext(GlobalContext);
  return (
    <button
      data-testid="button"
      className="button"
      onClick={() => selectButton(dispatch)}
    >
      {symbol}
    </button>
  );
}
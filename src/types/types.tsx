export interface GlobalProviderProps {
    children: any;
}

export interface IEvaluate {
    currentOperand: number | null;
    previousOperand: number | null;
    operation: string;
}

export interface IGlobalContextProps extends IEvaluate {
    overwrite: boolean;
    selectButton: ({}) => void;
}

export type ActionType = {
    type: 'ADD' | 'OPERATOR' | 'CLEAR' | 'DELETE' | 'EVALUATE' | {};
    payload?: any;
};

export interface IButtonProps {
    symbol: string;
    dispatch: ActionType;
}
  
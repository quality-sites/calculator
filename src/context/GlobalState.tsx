import { FC, createContext, useReducer, useMemo } from 'react';
import { GlobalProviderProps, IGlobalContextProps } from '../types/types';
import AppReducer from './AppReducer';

export const defaultInitialState: IGlobalContextProps = {
    currentOperand: null,
    previousOperand: null,
    operation: '',
    overwrite: false,
    selectButton: () => {}
}

export const GlobalContext = createContext<IGlobalContextProps>(defaultInitialState);

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
    const [{ currentOperand, previousOperand, operation, overwrite }, dispatch] = useReducer<React.Reducer<any, any>>(
        AppReducer,
        defaultInitialState
    );

    const providerValue: IGlobalContextProps = useMemo(() => {
        const selectButton = (dispatchActions: {}) => {
            dispatch(dispatchActions);
        }
        return ({
            currentOperand,
            previousOperand,
            operation,
            overwrite,
            selectButton
        })
    },
        [
            currentOperand,
            previousOperand,
            operation,
            overwrite
        ]
    );

    return (<GlobalContext.Provider value={providerValue}>
        {children}
    </GlobalContext.Provider>);
}

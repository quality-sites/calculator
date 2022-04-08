import { ACTIONS } from '../constants/constants';
import { IGlobalContextProps, ActionType, IEvaluate } from '../types/types';

const evaluate = ({ currentOperand, previousOperand, operation }: IEvaluate) => {
    let computation: number = 0;
    const prev: number | null = previousOperand;
    const current: number | null = currentOperand;

    const prevValue = Number(prev);
    const currentValue = Number(current);
    
    if (prevValue && currentValue){
      switch (operation) {
        case '+':
          computation = prevValue + currentValue;
          break;
        case '-':
          computation = prevValue - currentValue;
          break;
        case '*':
          computation = prevValue * currentValue;
          break;
        case '÷':
          computation = prevValue / currentValue;
          break;
      }
    }
  
    return computation.toString();
}

export const appReducer = (state: IGlobalContextProps, action: ActionType) => {
    switch (action.type) {
        case ACTIONS.ADD:
          if (state.overwrite) {
            return {
              ...state,
              currentOperand: action.payload.digit,
              overwrite: false,
            }
          }
          if (action.payload.digit === 0 && state.currentOperand === 0) {
            return state;
          }
          if (action.payload.digit === '.' && state.currentOperand && state.currentOperand.toString().includes('.')) {
            return state;
          }
    
          return {
            ...state,
            currentOperand: `${state.currentOperand || ''}${action.payload.digit}`,
          }
        case ACTIONS.OPERATOR:
          if (state.currentOperand == null && state.previousOperand == null) {
            return state
          }
    
          if (state.currentOperand == null) {
            return {
              ...state,
              operation: action.payload.operation,
            }
          }
    
          if (state.previousOperand == null) {
            return {
              ...state,
              operation: action.payload.operation,
              previousOperand: state.currentOperand,
              currentOperand: null,
            }
          }
    
          return {
            ...state,
            previousOperand: evaluate(state),
            operation: action.payload.operation,
            currentOperand: null,
          }
        case ACTIONS.CLEAR:
          return {}
        case ACTIONS.DELETE:
          if (state.overwrite) {
            return {
              ...state,
              overwrite: false,
              currentOperand: null,
            }
          }
          if (state.currentOperand == null) return state
          if (state.currentOperand.toString().length === 1) {
            return { ...state, currentOperand: null }
          }
    
          return {
            ...state,
            currentOperand: state.currentOperand.toString().slice(0, -1),
          }
        case ACTIONS.EVALUATE:
          if (
            state.operation == null ||
            state.currentOperand == null ||
            state.previousOperand == null
          ) {
            return state
          }
    
          return {
            ...state,
            overwrite: true,
            previousOperand: null,
            operation: null,
            currentOperand: evaluate(state),
          }
      }
}

export default appReducer;
  
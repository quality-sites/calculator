export const ACTIONS = {
    ADD: 'ADD',
    OPERATOR: 'OPERATOR',
    CLEAR: 'CLEAR',
    DELETE: 'DELETE',
    EVALUATE: 'EVALUATE'
}

export const buttons = [
    {
      symbol: 'AC',
      dispatch: { type: ACTIONS.CLEAR }
    },
    {
      symbol: 'DEL',
      dispatch: { type: ACTIONS.DELETE }
    },
    {
      symbol: '',
      dispatch: {}
    },
    {
      symbol: '÷',
      dispatch: { type: ACTIONS.OPERATOR, payload: { operation: '÷' }}
    },
    {
      symbol: '1',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 1 }}
    },
    {
      symbol: '2',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 2 }}
    },
    {
      symbol: '3',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 3 }}
    },
    {
      symbol: '*',
      dispatch: { type: ACTIONS.OPERATOR, payload: { operation: '*' }}
    },
    {
      symbol: '4',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 4 }}
    },
    {
      symbol: '5',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 5 }}
    },
    {
      symbol: '6',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 6 }}
    },
    {
      symbol: '+',
      dispatch: { type: ACTIONS.OPERATOR, payload: { operation: '+' }}
    },
    {
      symbol: '7',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 7 }}
    },
    {
      symbol: '8',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 8 }}
    },
    {
      symbol: '9',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 9 }}
    },
    {
      symbol: '-',
      dispatch: { type: ACTIONS.OPERATOR, payload: { operation: '-' }}
    },
    {
      symbol: '.',
      dispatch: { type: ACTIONS.OPERATOR, payload: { operation: '.' }}
    },
    {
      symbol: '0',
      dispatch: { type: ACTIONS.ADD, payload: { digit: 0 }}
    },
    {
      symbol: '',
      dispatch: {}
    },
    {
      symbol: '=',
      dispatch: { type: ACTIONS.EVALUATE }
    },
  ];
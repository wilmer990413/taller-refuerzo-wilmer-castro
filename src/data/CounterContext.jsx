import React, { createContext, useReducer, useContext } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter debe ser utilizado dentro de CounterProvider');
  }
  return context;
};

export { CounterProvider, useCounter };
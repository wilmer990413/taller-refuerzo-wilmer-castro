import React from 'react';
import { useCounter } from '../data/CounterContext';

const MiContadorConUseReducer = () => {
    const { state, dispatch } = useCounter();
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    return (
        <div>
            <p>Contador: {state.count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
};

export default MiContadorConUseReducer;
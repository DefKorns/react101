import { useReducer, useState } from 'react';
import { reducer } from '../reducer';

const initialState = 0;

export function Counter() {

    // const [counter, setCounter] = useState(0);
    const [counter, dispatch] = useReducer(reducer, initialState);

    function handleIncrement() {
        // setCounter(prev => prev + 1);
        dispatch('INCREMENT');
    }

    function handleDecrement() {
        // setCounter(prev => prev - 1);
        dispatch('DECREMENT');
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}
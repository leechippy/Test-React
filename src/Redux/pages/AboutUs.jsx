import React, { useState, useReducer } from 'react';
import './Counter.css'
import { counterFunction, initailState } from '../Reducer/counterDeducer';
import { INCREMENT, DECREMENT } from '../Reducer/constant'
const AboutUs = () => {
    const [state, counterDispach] = useReducer(counterFunction, initailState)

    // const [counter, SetCounter] = useState(0)
    // const [color, SetColor] = useState()
    const increment = () => {
        counterDispach({
            count: state.count + 1,
            type: INCREMENT
        })
        // SetCounter(counter + 1)
        // SetColor('green')
    }
    const decrement = () => {
        counterDispach({
            count: state.count - 1,
            type: DECREMENT
        })
        // SetCounter(counter - 1)
        // SetColor('red')
    }
    return (
        <div>
            <div style={{
                border: '1px solid black',
                textAlign: 'center',
                fontWeight: '999',
                padding: '12px',
                margin: '20px',
                fontSize: '20px',

            }}
            >
                <span style={{ color: state.color }} >{state.count}</span>
                <div style={{ display: 'flex' }}>
                    <button onClick={increment} name='increment'>Increment</button>
                    <button onClick={decrement} name='decrement'>Decrement</button>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;

import { func } from 'prop-types';
import React, { useState, useCallback } from 'react';

const functionsCounter = new Set()

const CounterHook = () => {
    const [count, setCount] = useState(0)
    const [otherCounter, setOtherCounter] = useState(0)

    const increment = useCallback(() => {
        setCount(count +1 )
    }, [count])

    const decrement = useCallback(() => {
        setCount(count -1)
    }, [count])

    const incrementOtherCounter = useCallback(() => {
        setOtherCounter(otherCounter + 1)
    }, [otherCounter])
    functionsCounter.add(increment)
    functionsCounter.add(decrement)
    functionsCounter.add(incrementOtherCounter)

    console.log('functionCounter', functionsCounter.size)
    return (
        <div className="containerCounter">
            Count: {count} 
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>Increment other counter</button>
        </div>
    )
}

export default CounterHook;
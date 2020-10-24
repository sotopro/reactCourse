import React , { useState,  useCallback } from 'react'

const CounterMemo = () => {

    const [count1, setCount1] = useState (0)
    const [count2, setCount2] = useState(0)

    const increaseCounter1 = useCallback(() => {
        setCount1(count1 => count1 + 1)
    }, [])
    const increaseCounter2 = useCallback(() => {
        setCount1(count2 => count1 + 1)
    }, [])
    return (
        <div className="containerCounter">
            <Counter value={count1} onClick={increaseCounter1}>Counter 1</Counter>
            <Counter value={count2} onClick={increaseCounter2}>Counter 2</Counter>
        </div>
    )
}

export {CounterMemo}

const Counter = ({value, children, onClick}) => {
    console.log('children', children)
    return (
        <button onClick={ () => onClick()}>
            {children} :{value}
        </button>
    )
}

export default React.memo(Counter);
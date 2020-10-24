import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState();
    const handleArrowBtn = (event) => {
        if(event.keyCode === 40) { // down arrow button
            setCounter(counter - 1)
        } else if (event.keyCode === 38) { // up arrow button
            setCounter(counter + 1)
        }
    }
    return (
        <div>
            <input 
                type="number"
                value={counter}
                onKeyDown={(e) => handleArrowBtn(e.keyCode)}
            />
        </div>
    )
}

export default Counter;
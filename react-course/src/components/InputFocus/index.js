import React, { useRef, useState, createRef } from 'react'

const InputFocus = () => {
    const [renderIndex, setRenderIndex] = useState(1)
    const refFromUseRef = useRef();
    const refFromCreateRef = createRef();

    if(!refFromUseRef.current) {
        refFromUseRef.current = renderIndex
    }

    if(!refFromCreateRef.current){
        refFromCreateRef.current = renderIndex
    }
    // const inputEl = useRef();
    // const focusInput = () => {
    //     inputEl.current.focus();
    // }
    return (
        <div className="containerCounter">
            {/* <input  ref={inputEl} type="text" />
            <button onClick={focusInput}>Focus input</button> */}
            <p>Current render index: {renderIndex}</p>
            <p>
                <b>refFromUseRef</b> value: {refFromUseRef.current}
            </p>
            <p>
                <b>refFromCreateRef</b> value: {refFromCreateRef.current}
            </p>
            <button onClick={() => setRenderIndex(prev => prev + 1)}>Cause re-render</button>
        </div>
    )
}

export default InputFocus;
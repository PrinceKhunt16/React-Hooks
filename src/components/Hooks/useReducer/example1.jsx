import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT_COUNT":
            return {
                ...state,
                count: state.count + 1
            }
        case "TOGGLE_SHOWTEXT":
            return {
                ...state,
                showText: !state.showText
            }
        default:
            return state;
    }
}

const Example1 = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0, 
        showText: true
    });

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({type: "INCREMENT_COUNT"});
                dispatch({type: "TOGGLE_SHOWTEXT"});
            }}>Get Show</button>
            {state.showText && <p>How are you ?</p>}
        </>
    )
}

export default Example1
import React, { useRef } from 'react'
import Child1Example1 from './child1'

const Example1 = () => {
    const buttonRef = useRef(null);

    return (
        <div>
            <button onClick={() => {
                buttonRef.current.alterToggle();
            }}>Parent</button>
            <Child1Example1 ref={buttonRef} />
        </div>
    )
}

export default Example1
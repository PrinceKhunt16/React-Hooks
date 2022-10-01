import React, { useState } from 'react'
import Child1 from './child1';

const Example1 = () => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} />
            <Child1 input={input} />
        </div>
    )
}

export default Example1
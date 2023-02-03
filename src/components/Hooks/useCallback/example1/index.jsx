import React, { useState } from 'react'
import { useCallback } from 'react'
import Child1 from './Child1'

const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [calculate, setCalculate] = useState(0)

    const increment = () => {
        console.log('counter called')
        setCounter(counter + 1)
    }

    const calculateData = useCallback((data) => {
        console.log('calculateData called')
        setCalculate(data)
    }, [])

    return (
        <div>
            <Child1 calculateData={calculateData} />
            <h2>{calculate}</h2>
            <button onClick={increment}>Count {counter}</button>
        </div>
    )
}

export default Example1

import React, { useState } from 'react'

const Example1 = () => {
    const [count, setCount] = useState({
        num: 1,
        id: 'sd89s9d'
    });

    const handleAdd = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num + 1
            }
        });
    }

    const handleSubstract = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num - 1
            }
        });
    }

    return (
        <div>
            <button onClick={handleSubstract}>-</button>
            <span>{count.num}</span>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default Example1

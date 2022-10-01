import React, { useState } from 'react'

const Example1 = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => {
      return prev + 1
    });
  }

  const handleSubstract = () => {
    setCount((prev) => {
      return prev - 1
    });
  }

  return (
    <div>
      <button onClick={handleSubstract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default Example1

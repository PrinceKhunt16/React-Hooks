import React, { useState } from 'react'

const Example3 = () => {
  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
  }

  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((number) => number + 1)
    }, 1000)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>Increase Async</button>
    </div>
  )
}

export default Example3
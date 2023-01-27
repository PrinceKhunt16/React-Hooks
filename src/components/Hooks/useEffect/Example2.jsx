import React, { useEffect, useState } from 'react'

const Example2 = () => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1)
    }, 1000);
  
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <h1>{number}</h1>
  )
}

export default Example2
import React, { useEffect, useState } from 'react'

const Example1 = () => {
    const [width, setWidth] = useState(window.innerWidth);
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

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });

        console.log("component mount");

        return () => {
            console.log("component unmount");
        }

    }, [count]);

    return (
        <>
            <div>
                <button onClick={handleSubstract}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <h1>{width}</h1>
        </>
    )
}

export default Example1

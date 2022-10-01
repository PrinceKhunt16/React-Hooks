import React, { useEffect, useLayoutEffect, useRef } from 'react'

const Exmaple1 = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.style.background = "white";
            inputRef.current.style.color = "black";
            inputRef.current.value = "Rajan Khunt";
        }, 500);
    }, []);

    useLayoutEffect(() => { 
        inputRef.current.style.background = "black";
        inputRef.current.style.color = "white";
        inputRef.current.value = "Prince Khunt";
    }, []);

    return (
        <div>
            <input ref={inputRef} />
        </div>
    )
}

export default Exmaple1
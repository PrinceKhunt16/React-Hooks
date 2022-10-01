import React, { useRef } from 'react'

const Example1 = () => {
    const inputRef = useRef(null);

    const handleChange = () => {
        inputRef.current.value = "";
    };

    return (
        <>
            <input type="text" placeholder="Prince Khunt" ref={inputRef} />
            <button onClick={handleChange}>Change Name</button>
        </>
    );
}

export default Example1
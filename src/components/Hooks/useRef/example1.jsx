import React, { useRef, useState } from 'react'

const Example1 = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const setDefault = () => {
        inputRef.current.value = "";
    };

    const handleChange = (inputRef) => {
        setValue(inputRef.current.value);
    }

    return (
        <>
            <input value={value} ref={inputRef} onChange={() => handleChange(inputRef)} type="text" placeholder="" />
            <button onClick={setDefault}>Reset Name</button>
        </>
    );
}

export default Example1;
import React, { useState, useTransition } from 'react'

const Example1 = () => {
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);

        startTransition(() => {
            const nums = [];

            for(let i = 0; i < 10000; i++){
                nums.push(e.target.value);
            }

            setList(nums);
        });
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            {isPending && <p>Loading</p>}
            {
                list.map((item, index) => {
                    return (
                        <>
                            <div key={index}>{item}</div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Example1

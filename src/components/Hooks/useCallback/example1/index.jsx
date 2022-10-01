import React, { useState } from 'react'
import { useCallback } from 'react';
import Child1 from './child1';

const Example1 = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('dfsf8agdfg9d8d7fd');

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

    return (
        <div>
            <Child1 returnComment={returnComment}/>
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >Toggle</button>
            {toggle && <h1>Toggle</h1>}
        </div>
    )
}

export default Example1

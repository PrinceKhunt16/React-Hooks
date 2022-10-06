import React, { forwardRef, useImperativeHandle } from 'react'
import { useState } from 'react'

const Child1 = (props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle: () => {
            setToggle(!toggle);
        }
    }));

    return (
        <div>
            <button>Child</button>
            {toggle && <span>Toggle</span>}
        </div>
    )
}

export default forwardRef(Child1);
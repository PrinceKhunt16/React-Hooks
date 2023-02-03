import React, { useMemo, useDeferredValue } from 'react'

const Child1 = ({ input }) => {
    const deferredInput = useDeferredValue(input);
    
    const list = useMemo(() => {
        const nums = [];

        for(let i = 0; i < 10000; i++){
            nums.push(<div key={i}>{deferredInput}</div>)
        }

        return nums;
    }, [deferredInput]);

    return list;
}

export default Child1
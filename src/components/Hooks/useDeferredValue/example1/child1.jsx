import React, { useMemo, useDeferredValue } from 'react'

const Child1 = ({ input }) => {
    const deferredInput = useDeferredValue(input);

    const list = useMemo(() => {
        const arr = [];

        for(let i = 0; i < 10000; i++){
            arr.push(<div key={i}>{deferredInput}</div>)
        }

        return arr;
    }, [deferredInput]);

    return list;
}

export default Child1
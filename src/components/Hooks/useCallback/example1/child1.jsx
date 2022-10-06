import React, { memo, useState } from 'react'

const Child1 = ({calculateData}) => {
    const [num, setNum] = useState(0);

    const calculateNum = () => {        
        setNum(Math.floor(Math.random() * (100 - 0) + 0));        
        calculateData(num);
    }

    return (
        <div>
            <button onClick={calculateNum}>Return Calculate Data</button>
        </div>
    )
}

export default memo(Child1);

import React, { memo, useEffect } from 'react'

const Child1 = ({returnComment}) => {
    useEffect(() => {
        console.log('returnComment function called');
    }, [returnComment]);

    return (
        <div>
            {returnComment('princekhunt')}
        </div>
    )
}

export default memo(Child1);

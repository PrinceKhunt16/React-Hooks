import React, { useContext } from 'react'
import { UserContext } from './index';

const Child1 = () => {
    const {setUsername} = useContext(UserContext);

    return (
        <div>
            <input type="text"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
                placeholder="Type something"
            />            
        </div>
    )
}

export default Child1
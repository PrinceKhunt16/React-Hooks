import React, { useState } from 'react'
import { createContext } from 'react'
import Child1 from './child1';
import Child2 from './child2';

export const UserContext = createContext(null);

const Example1 = () => {
    const [username, setUsername] = useState('');

    return (
        <UserContext.Provider value={{username, setUsername}}>
            <Child1 />
            <Child2 />
        </UserContext.Provider>
    )
}

export default Example1
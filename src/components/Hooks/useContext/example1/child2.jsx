import React, { useContext } from 'react'
import { UserContext } from './index'

const Child2 = () => {
    const {username} = useContext(UserContext);

    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default Child2

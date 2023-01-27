import React, { useEffect, useMemo, useState } from 'react'

const Example1 = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                return res.json();
            })    
            .then((resData) => {
                setData(resData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const findLongestName = (comments) => {
        if(!comments){
            return null;
        }

        let longestName = "";

        for(let i = 0; i < comments.length; i++){
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        return longestName;
    };

    const getLongestName = useMemo(() => {
        console.log('getLongestName function called');
        return findLongestName(data);
    }, [data]);

    return (
        <div>
            <h1>{getLongestName}</h1>
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                Toggle
            </button>
            {toggle && <h1> toggle </h1>}   
        </div>
    )
}

export default Example1

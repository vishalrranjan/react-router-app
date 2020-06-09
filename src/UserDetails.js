import React, {useState, useEffect} from 'react';

function UserDetails({match}){

    const [item, setItem] = useState({});

    useEffect(()=>{
        const fetchItem = async ()=>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
            const resData = await data.json();
            setItem(resData);
        }
        fetchItem();
    }, [match]);

    // const fetchItem = async ()=>{
    //     const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
    //     const resData = await data.json();
    //     setItem(resData);
    // }

    return(
        <div>
            <h2>Hello {item.username}</h2>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>ID: {item.id}</p>
        </div>
    )
}

export default UserDetails;
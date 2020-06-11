import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Auth from './Auth';

function User(props){

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetchItems();
    }, []);

    const fetchItems = async ()=>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const resData = await data.json();
        setItems(resData);
    }

    return(
        <div>
            <h2>User List</h2>
            {
                items.map(item=>(
                    <div key={item.id}>
                        <Link to={`/user/${item.id}`}>
                                <p>{item.name}</p>
                        </Link>
                    </div>
                ))
            }
            
            <button
            onClick={ ()=>{
                Auth.logout(()=>{
                    props.history.push("/");
                })
            }}
            >Logout</button>
        </div>
    )
}

export default User;
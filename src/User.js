import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function User(){

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
            
        </div>
    )
}

export default User;
import React from 'react';
import NavBar from './NavBar';
import auth from './Auth';

export function Home(props){
    return(
        <div>
            <NavBar/>
            <h1>Home Component</h1>
            <button
            onClick={ ()=>{
                auth.login(()=>{
                    props.history.push("/user");
                })
            } }
            >Login</button>
        </div>
    )
}
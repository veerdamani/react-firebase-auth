import React, { useContext, useState } from "react";
import {BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MyContext from "../context/mycontext";


function Signup (){
    
    const {SignupFire}  = useContext(MyContext)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    function Navigator(){
        navigate('/forgot')
    }



    return(
        <div>
            <center>
            <h1>Sign Up PAGE</h1>
            <label>Name : <br /><input type="text" value={name} onChange={(e)=> setName(e.target.value)} /></label> <br />
            <label>Email : <br /><input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} /></label> <br />
            <label>Password : <br /><input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} /></label> <br /> <br />
            <button  onClick={()=> SignupFire(name,email,password)}>SignUp</button> <br />
            <button onClick={Navigator}>Forgot Password</button>
            </center>
        </div>
    )
}

function Login (){
    return(
        <div>
            <h1>Login PAGE</h1>
        </div>
    )
}

export { Signup , Login }
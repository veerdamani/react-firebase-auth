import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import MyContext from "../context/mycontext";

function ForgotPage (){
    const {ForgotPass}  = useContext(MyContext)
    const [email , setEmail] = useState('')
    return(
        <div>
        <Helmet>
            <title>Forgot Page</title>
        </Helmet>
        <center>
            <h1>Forgot Password Page</h1>
        <input type="email" placeholder="Enter Your Email :" value={email} onChange={(e)=> setEmail(e.target.value)} /> <br />
        <button onClick={()=> ForgotPass(email)}>Send Email Password Reset</button>
        </center>
        </div>
    )
}

export default ForgotPage;
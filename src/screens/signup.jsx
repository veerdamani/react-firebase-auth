import React from "react";
import { Signup } from "../components/signup-login";
import { Helmet } from "react-helmet";

function SignupPage (){
    return(
        <div>
            <Helmet>
                <title>SignUp Page</title>
            </Helmet>
            <Signup/>
        </div>
    )
}

export default SignupPage;
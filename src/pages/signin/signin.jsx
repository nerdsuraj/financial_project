/* eslint-disable no-unused-vars */
import React from "react";
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/

const signin = () => {
    return (<div>

        <div className="mainbox1">
            <div className="mainbox2">
                <div className="mainbox2b"> Sign in </div>
                <div className="mainbox2c">to continue to fundoo notes</div>
                <div className="mainbox2d">
                    <TextField className="box2d" label="Email or Phone" variant="outlined" />
                </div>
                <div className="mainbox2e" style={{ color: 'blue',cursor:"pointer" }}>Forget email?</div>
                <div className="mainbox2d">
                    <TextField type="password" className="box2d" label="Password" variant="outlined" />
                </div>
                <div className="mainbox2e" style={{ color: 'blue',cursor:"pointer" }}>Forgot Password?</div>
                <div className="mainbox2f">Not your computer?Use Guest mode to sign in privately.</div>
                <div className="mainbox2h">
                    <Button className="account" style={{ color: 'blue' }}>Create account</Button>
                    <Button variant="contained">Next</Button>
                </div>
            </div>
        </div>

    </div>);

}

export default signin;
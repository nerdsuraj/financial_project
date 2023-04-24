/* eslint-disable no-unused-vars */
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './singup.css';
const NameRegex = /^[A-Z]{1}[a-z]{2,}$/
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/

const signup = () => {

    return (<div>
        <div className="SignUpmainbox">
            <div className="SignUpmainbox1">
                <div className="SignUpmainbox2">
                    <div className="SignUpmainbox4">
                        <div className="SignUpmainbox4a">
                            <b className="img1" style={{ color: 'blue' }}>Financial</b>   
                        </div>
                        <div className="mainbox4b">Create your Financial account</div>
                        <div className="mainbox4d">
                            <TextField  className="mainbox4da" label="First Name" variant="outlined" size="small"  />
                            <TextField  className="mainbox4da" label="Last Name" variant="outlined" size="small"  />
                        </div>
                        <div className="mainbox4e">
                            <TextField  className="mainbox4e1" label="Username" variant="outlined" size="small"  />
                        </div>
                        <div className="mainbox4f">You can use letter,numbers & periods</div>
                        <div className="mainbox4x">
                            <TextField   className="mainbox4xa" label="Confirm" variant="outlined" size="small"  />
                            <TextField   className="mainbox4xa" label="Password" variant="outlined" size="small"  />
                        </div>
                        <div className="mainbox4g">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                        <div className="mainbox4h">
                            <input type="checkbox" id="password" />
                            <label for="password">Show password</label><br />
                        </div>
                        <div className="mainbox4i">
                            <Button  className="account" style={{ color: 'blue' }}>Sign in instead</Button>
                            <Button  variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default signup;
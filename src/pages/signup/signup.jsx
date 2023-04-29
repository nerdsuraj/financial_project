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

        <section className="text-center">
            <div className="p-5 bg-image" style={{ backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")', "height": "300px" }}>
            </div>

            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ "marginTop": " -100px", "background": "hsla(0, 0%, 100%, 0.8)", "backdropFilter": "blur(30px)" }}>
                <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Sign up now</h2>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" id="form3Example1" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example1">First name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" id="form3Example2" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example2">Last name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example4" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                    <label className="form-check-label" htmlFor="form2Example33">
                                        Subscribe to our newsletter
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Sign up
                                </button>
                                <div className="text-center">
                                    <p>or sign up with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fa fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fa fa-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fa fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fa fa-github"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>);
}

export default signup;
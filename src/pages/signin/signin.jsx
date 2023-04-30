/* eslint-disable no-unused-vars */
import React from "react";
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { FormSchema } from "../FormSchema";
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/

const Signin = () => {

    const FormInitialValues = {
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: FormInitialValues,
        validationSchema:FormSchema,
        onSubmit: (values) => {
            console.log("values", values);
            // console.log("values", values.name);
            // console.log("values", values.email);
        }
    })



    return (<div>
        <section className="text-center">
            <div className="p-5 bg-image" style={{ backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")', "height": "300px" }}>
            </div>

            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ "marginTop": " -100px", "background": "hsla(0, 0%, 100%, 0.8)", "backdropFilter": "blur(30px)" }}>
                <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Sign in now</h2>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <input type="text" id="form3Example3" className="form-control"  name="email" onChange={formik.handleChange} value={formik.values.email}/>
                                    <span className="text-danger">{formik.errors.email}</span>
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" className="form-control"  name="password" onChange={formik.handleChange} value={formik.values.password}/>
                                    <span className="text-danger">{formik.errors.password}</span>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Sign in
                                </button>
                                <div className="text-center">
                                    <p>or sign in with:</p>
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

export default Signin;
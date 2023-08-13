/* eslint-disable no-unused-vars */
import React from "react";
import { redirect, useNavigate } from 'react-router-dom';
import './singup.css';
import { useFormik } from "formik";
import { signupSchema } from "./signupSchema";
import { UserSignUp } from "../../services/userservice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const navigate = useNavigate();

    const FormInitialValues = {
        name: 'suraj',
        phone: '1234567890',
        email: 'soorajkrpandit@gmail.com',
        password: 'dinesh@12345',
    };

    const { handleSubmit, values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: FormInitialValues,
        validationSchema: signupSchema,
        onSubmit: async (values) => {
            // console.log("values from sign up!!", values);
            if (values !== null) {
                UserSignUp(values).then((res) => {
                    // console.log("from registration api", res);
                    if (res.status === 200) {
                        toast("Registration Successfull!!")
                        setTimeout(() => {
                            navigate('/login');
                        }, 1000);
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
    });

    function handleLogin() {
        navigate('/Login');
    }


    return (<div>
        <section className="text-center">
            <div className="p-5 bg-image" style={{ backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")', "height": "300px" }}>
            </div>

            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ "marginTop": " -100px", "background": "hsla(0, 0%, 100%, 0.8)", "backdropFilter": "blur(30px)" }}>
                <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Sign up now</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-outline mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form3Example1">Full Name</label>
                                            <input type="text" id="form3Example1" className="form-control" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} />
                                            {errors.name && touched.name ? (<span className="text-danger">{errors.name}</span>) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" className="form-control" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} />
                                    {errors.email && touched.email ? (<span className="text-danger">{errors.email}</span>) : null}
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example5">Phone Number</label>
                                    <input type="number" id="form3Example5" className="form-control" name="phone" onBlur={handleBlur} value={values.phone} onChange={handleChange} />
                                    {errors.phone && touched.phone ? (<span className="text-danger">{errors.phone}</span>) : null}
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" className="form-control" name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} />
                                    {errors.password && touched.password ? (<span className="text-danger">{errors.password}</span>) : null}
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Sign up
                                </button>
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <label className="form-check-label" htmlFor="form2Example33">
                                        <span className="underline-on-hover" onClick={handleLogin} style={{"color": "#007bff",}} >already have an account <i className="fa fa-sign-in" aria-hidden="true"></i></span>
                                    </label>
                                </div>
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
            <ToastContainer />
        </section>

    </div>);
}

export default Signup;
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import './signin.css'
import { useFormik } from 'formik';
import { signinSchema } from "./signinSchema";
import { UserSignIn } from "../../services/userservice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";


const Signin = () => {
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);



    const FormInitialValues = {
        email: '',
        password: ''
    }

    const { handleSubmit, values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: FormInitialValues,
        validationSchema: signinSchema,
        onSubmit: (values) => {
            // console.log("values from sign in!!", values);
            if (values !== null) {
                UserSignIn(values).then((res) => {
                    // console.log("from login api", res);
                    if (res.status === 200) {
                        toast("Login Successfull!!")
                        let store_local = res.config.data;
                        store_local = JSON.parse(store_local);
                        localStorage.setItem('email', store_local.email);
                        localStorage.setItem('login', true);
                        setTimeout(() => {
                            navigate('/');
                        }, 1000);
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
        }
    })
    function Login() {
        navigate('/signup');
    }


    return (<div>
        <section className="text-center">
            <div className="p-5 bg-image" style={{ backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")', "height": "300px" }}>
            </div>

            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ "marginTop": " -100px", "background": "hsla(0, 0%, 100%, 0.8)", "backdropFilter": "blur(30px)" }}>

                <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                        <div className="backhome">
                            <button className="btn btn-primary" onClick={()=>{navigate('/');}}>
                                <i className="bi bi-arrow-left"></i> Home
                            </button>
                        </div>
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Sign in now</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" className="form-control" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} />
                                    {errors.email && touched.email ? (<span className="text-danger">{errors.email}</span>) : null}
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <div style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <input type={showPassword ? "text" : "password"} id="form3Example4" className="form-control" name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} />
                                        <div>
                                            {showPassword ? (
                                                <i
                                                    className="bi bi-eye"
                                                    onClick={() => setShowPassword(false)}
                                                    style={{ cursor: "pointer" }}
                                                ></i>
                                            ) : (
                                                <i
                                                    className="bi bi-eye-slash"
                                                    onClick={() => setShowPassword(true)}
                                                    style={{ cursor: "pointer" }}
                                                ></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.password && touched.password ? (<span className="text-danger">{errors.password}</span>) : null}
                                </div>
                                <div style={{ "marginRight": "72%", "cursor": "pointer" }}>
                                    <a onClick={Login}
                                        style={{
                                            textDecoration: "none",
                                            position: "relative",
                                            color: "#007bff",
                                        }}
                                        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                                        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                                    >Don't have an account? Register here</a>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Sign in
                                </button>
                                {/* <div className="text-center">
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
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>

    </div>);

}

export default Signin;
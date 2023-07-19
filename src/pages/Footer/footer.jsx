/* eslint-disable no-unused-vars */
import React from "react";
import './footer.css'
import { useFormik } from 'formik';
import { NumberSchema } from "./phoneSchema";
import { useState, useEffect } from "react";
import { BusinessService } from "../../services/businessServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

    const [mobile_number, setmobile_number] = useState('');

    const FormInitialValues = {
        mobile_number: '',
    }

    const { handleSubmit, values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: FormInitialValues,
        validationSchema: NumberSchema,
        onSubmit: (values) => {
            if (values !== null) {
                console.log("values is *not null before!", values);
                values.email = "test@gmail"
                console.log("values is *not null after!", values);
                BusinessService().whatsapp_number(values).then((res) => {
                    console.log("res is ", res);
                    if(res.status === 200){
                        toast("will contact you soon😍")
                    }
                }).catch((err) => {
                    console.log("err is ", err);
                    toast("number is already exists🤭")

                })
            }
        }
    })


    return (
        <div className="text-white footer">
            <div className="footer_title fadingBackground">
                <div className="title_text">
                    <h5>Don't miss a beat in the financial world! Share your WhatsApp number for instant updates.</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="title_form d-flex align-items-center">
                        <input type="text" name="mobile_number" placeholder="Your Whatapp number" onBlur={handleBlur} value={values.mobile_number} onChange={handleChange} />
                        <input type="submit" className="bg-success" />
                    </div>
                    {errors.mobile_number && touched.mobile_number ? (<div className="text-danger">{errors.mobile_number}</div>) : null}
                </form>
            </div>
            <div className="category_wrapper">
                <div className="text-center">
                    <h5>OUR WORK</h5>
                    <h6>Who we Serve</h6>
                    <h6>Our Approach</h6>
                    <h6>Our Impact</h6>
                    <h6>Partners</h6>
                    <h6>Where We Work</h6>
                </div>
                <div className="text-center">
                    <h5>ABOUT US</h5>
                    <h6>Mission</h6>
                    <h6>Values</h6>
                    <h6>Awards</h6>
                    <h6>Contact</h6>
                    <h6>Team</h6>
                </div>
                <div className="text-center">
                    <h5>RESOURCES</h5>
                    <h6>News & Media</h6>
                    <h6>Impact Reports</h6>
                    <h6>Publications</h6>
                </div>
                <div className="text-center">
                    <h5>CONNECT WITH US</h5>
                    <i className="fa-brands fa-facebook mx-1"></i>
                    <i className="fa-brands fa-linkedin mx-1"></i>
                    <i className="fa-brands fa-google mx-1"></i>
                </div>
            </div>
            <div className='text-center p-3 fadingBackground'>
                © 2020 Copyright:
                <a className="text-white" href='https://paisahipaisahoga.in/'>
                    paisahipaisahoga.in
                </a>
            </div>
            <ToastContainer />
        </div>)
}

export default Footer;
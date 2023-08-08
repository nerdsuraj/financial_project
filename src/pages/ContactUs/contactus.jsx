/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './contactus.css';
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import { contactShchema } from './contactSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import map from '../../assets/images/map.png';
import gmail from '../../assets/images/gmail.png';
import call from '../../assets/images/call.png';
import { BusinessService } from '../../services/businessServices';

const ContactUs = () => {


    const FormInitialValues = {
        name: 'suraj',
        email: 'soorajkrpandit@gmail.com',
        message: 'helloji',
    };

    const { handleSubmit, values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: FormInitialValues,
        validationSchema: contactShchema,
        onSubmit: async (values) => {
            console.log("values from sign up!!", values);
            if (values !== null) {
                console.log('here is the data !!!');
                BusinessService().contact_data(values).then((res) => {
                    console.log("res is ", res);
                    if(res.status === 200){
                        toast("will contact you soon😍")
                    }
                }).catch((err) => {
                    console.log("err is ", err);

                })
            }
        },
    });


    return (<>
        <Navbar />
        <div className='mainContainer'>
            <div>
                <h2 style={{ color: '#1246AB', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Contact Us</h2>
            </div>
            <div className='fillInput'>
                <div className="col-lg-8">
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
                            <label className="form-label" htmlFor="form3Example2">Email address</label>
                            <input type="email" id="form3Example2" className="form-control" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} />
                            {errors.email && touched.email ? (<span className="text-danger">{errors.email}</span>) : null}
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">Your message </label>
                            <textarea type="text" id="form3Example3" className="form-control" name="message" onBlur={handleBlur} value={values.message} onChange={handleChange} />
                            {errors.message && touched.message ? (<span className="text-danger">{errors.message}</span>) : null}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
            <div className='quertDetails'>
                <div>
                    <h2 style={{ color: '#3469fa', fontWeight: 'bold', }}>Connect With Us</h2>
                    <span style={{ fontWeight: 'bold' }}>
                        We always love to hear from you. We welcome your feedback and suggestions. Feel free to contact us anytime.
                    </span>
                </div>
                <div className='imagesection'>
                    <div>
                        <img src={call} alt="phone" style={{ height: '90px' }} />
                        <span>6200749278</span> <span>9029321998</span>
                    </div>
                    <div>
                        <img src={gmail} alt="email" style={{ height: '90px' }}/>
                        <span>freelancers@fastservice.com</span>
                    </div>
                    <div>
                        <img src={map} alt="address" style={{ height: '90px' }}/>
                        <span>Mumbai Maharashtra, India 🇮🇳</span>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>)

}
export default ContactUs;
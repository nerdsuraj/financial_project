/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.css'

import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

function footer() {
    return (
        <div className="text-white footer">
            {/* <MDBFooter className='bg-light text-center text-white'>
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#3b5998' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon
                                fas
                                icon="sort-amount-down-alt"
                                className="ms-2"
                                style={{ color: "#23af89" }}
                            />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#55acee' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#dd4b39' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='google' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#0082ca' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#333333' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https://paisahipaisahoga.in/'>
                        paisahipaisahoga.in
                    </a>
                </div>
            </MDBFooter> */}
            <div className="footer_title fadingBackground">
                <div className="title_text">
                    <h3>Subscribe to our Newsletter today!!!</h3>
                </div>
                <div className="title_form d-flex align-items-center">
                    <input type="email" name="email" placeholder="Your Email Address" />
                    <input type="button" className="bg-success" value="SUBMIT" />
                </div>
            </div>
            <div className="category_wrapper">
                <div class="text-center">
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
                    <i class="fa-brands fa-facebook mx-1"></i>
                    <i class="fa-brands fa-linkedin mx-1"></i>
                    <i class="fa-brands fa-google mx-1"></i>
                    </div>
            </div>
            <div className='text-center p-3 fadingBackground'>
                © 2020 Copyright:
                <a className="text-white" href='https://paisahipaisahoga.in/'>
                    paisahipaisahoga.in
            </a>
            </div>
        </div>)
}

export default footer
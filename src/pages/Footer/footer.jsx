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
        <div className = "bg-dark text-white">
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
            <div className = "footer_title">
                <div className ="title_text">
                    <h3>Subscribe to our Newsletter today!!!</h3>
                </div>
                <div className ="title_form d-flex align-items-center">
                    <input type="email" name="email" placeholder="Your Email Address"/>
                    <input type="button" className="bg-success"  value="SUBMIT"/>
                </div>
            </div>
            <div className='text-center p-3'>
                © 2020 Copyright:
                <a className="text-white" href='https://paisahipaisahoga.in/'>
                    paisahipaisahoga.in
                </a>
            </div>
        </div>)
}

export default footer
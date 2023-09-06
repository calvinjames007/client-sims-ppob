import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon, MDBCheckbox} from 'mdb-react-ui-kit';
import React from 'react';
import {Link} from "react-router-dom";
import '../styles/registerAndLoginPage.css';

function landingPage() {
    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <div className='container'>
                                <div className="center-content">
                                    <img className="gambar-dompet" src='https://cdn-icons-png.flaticon.com/512/272/272889.png' alt="Dompet Icon" />
                                    <p className="text-center fw-bold mb-2 mx-1 mx-md-4 mt-4">SIMS PPOB</p>
                                </div>
                            </div>

                            <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">Masuk atau buat akun untuk memulai</p>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput placeholder='@ masukan email anda' id='form1' type='text' className='w-100' />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput placeholder='masukan password anda' id='form2' type='email' />
                            </div>

                            <MDBBtn className='mb-4' size='lg'>Login</MDBBtn>

                            <div>
                                <p>belum punya akun ? <Link to={'/register'}>register</Link> disini</p>
                            </div>

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default landingPage;
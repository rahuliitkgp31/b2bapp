import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import Popup from './Popup.js'

export const Login = () => {
    const [logInTime, setLogInTime] = useState();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((password == "password") && (email == "admin@cocacola.com")) {
            setLogInTime(new Date().toLocaleString());
            navigate('/Table', { state: { timeLoggedIn: logInTime.toString()} })
        }
        else {
            setErrorMessage("Wrong credentials");
            setButtonPopup(true);
        }
    };
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <h1 class="text-center brandHeading">PayPal, Invoicing & Payments Platform</h1>
                        <img src="https://cdn-images-1.medium.com/max/1200/1*Dw4-tOJ_9myFUywLd3qzjA.png" className="img-fluid brandImage" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                                <p class="text-danger text-center">{errorMessage}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                            </div>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <p class='text-center'>
                                    {errorMessage}
                                </p>
                            </Popup>
                            <input type="submit" hidden />
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2022. All rights reserved.
                </div>
            </div>
        </section>
    )
}
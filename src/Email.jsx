import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export const Email = () => {
    return (
        <div className="card">
            <div className="card-body mx-4">
                <div className="container">
                    <p className="my-5" style={{ fontSize: '30px' }}>Thank for your purchase from CocaCola</p>
                    <div className="row">
                        <ul className="list-unstyled">
                            <li className="text-black">Coca Cola,</li>
                            <li className="text-black">P. O. Box 1734,</li>
                            <li className="text-black">Atlanta, Georgia,</li>
                            <li className="text-black">30301</li>
                        </ul>
                        <hr />
                        <div className="col-xl-10">
                            <p>Name of Customer</p>
                        </div>
                        <div className="col-xl-2">
                            <p className="float-end">
                                Walmart
                            </p>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xl-10">
                            <p>Invoice</p>
                        </div>
                        <div className="col-xl-2">
                            <p className="float-end">
                        <a href="https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf" target="_blank" class="link-primary text-decoration-none">Click here to view invoice</a>
                            </p>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xl-10">
                            <p>Payable Amount</p>
                        </div>
                        <div className="col-xl-2">
                            <p className="float-end">USD 21000
                            </p>
                        </div>
                        <hr  />
                    </div>
                    
                    <div className="text-center" style={{ marginTop: '90px' }}>
                    <button type="button" class="btn btn-primary btn-lg ">Pay with PayPal</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export const Email = () => {
    const [showElement, setShowElement] = useState(true);
    useEffect(() => {
        setTimeout(function () {
            setShowElement(false);
        }, 5000);
    }, []);
    const paypal = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "client bill for cocacola",
                                amount: {
                                    currency_code: "USD",
                                    value: 21000.0,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                },
                onError: (err) => {
                    console.log(err);
                    navigate('/Table');
                }
            })
            .render(paypal.current);
    }, []);

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
                        <hr />
                        <div id="paypal-button-container" class="text-center" style={{ marginTop: '3%' }}>
                            <div ref={paypal}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
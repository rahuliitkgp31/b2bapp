import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Table.css'

export const Table = () => {
  const listOfIndexes = [];
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(listOfIndexes);
    e.preventDefault();
    const newRows = [...rows];
    for (let i = 0; i < listOfIndexes.length; i++) {
      rows[listOfIndexes[i]].paymentStatus = "In-Progress";

    }
    setRows(newRows);
  }
  const handleTick = (e, id) => {
    console.log(id);
    listOfIndexes.push(id);
    console.log(listOfIndexes);
  }
  const InitRows = [
    {
      "id": 0, "name": "WalMart", "invoiceNumber": "1038", "invoiceDate": "15/11/2022",
      "invoiceDueDate": "14/11/2022", "openAmount": 21736, "invoiceAmount": 22328,
      "PayableAmount": 21000, "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 1, "name": "McDonald's", "invoiceNumber": "2834", "invoiceDate": "20/10/2022"
      , "invoiceDueDate": "19/12/2022", "openAmount": 18655, "invoiceAmount": 18655, "PayableAmount": 18373,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 2, "name": "The Kroger Co", "invoiceNumber": "3145", "invoiceDate": "15/10/2022"
      , "invoiceDueDate": "18/12/2022", "openAmount": 16865, "invoiceAmount": 16865, "PayableAmount": 16865,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 3, "name": "Costco", "invoiceNumber": "6373", "invoiceDate": "20/10/2022"
      , "invoiceDueDate": "01/01/2023", "openAmount": 16780, "invoiceAmount": 16780, "PayableAmount": 16570,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 4, "name": "Subway", "invoiceNumber": "7246", "invoiceDate": "25/10/2022"
      , "invoiceDueDate": "24/12/2022", "openAmount": 15397, "invoiceAmount": 15397, "PayableAmount": 15297,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 5, "name": "The Home Depot", "invoiceNumber": "3784", "invoiceDate": "20/11/2022"
      , "invoiceDueDate": "19/12/2022", "openAmount": 13746, "invoiceAmount": 13746, "PayableAmount": 13676,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 6, "name": "Albertsons Companies", "invoiceNumber": "9563", "invoiceDate": "27/11/2022"
      , "invoiceDueDate": "26/12/2022", "openAmount": 12614, "invoiceAmount": 12614, "PayableAmount": 12430,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 7, "name": "Food 4 Less", "invoiceNumber": "3474", "invoiceDate": "03/09/2022"
      , "invoiceDueDate": "23/01/2023", "openAmount": 21198, "invoiceAmount": 21198, "PayableAmount": 21000,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 8, "name": "Ruler Foods", "invoiceNumber": "4246", "invoiceDate": "01/11/2022"
      , "invoiceDueDate": "30/11/2022", "openAmount": 17465, "invoiceAmount": 18000, "PayableAmount": 17000,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 9, "name": "Kroger", "invoiceNumber": "8310", "invoiceDate": "13/10/2022"
      , "invoiceDueDate": "25/12/2022", "openAmount": 19786, "invoiceAmount": 19786, "PayableAmount": 19000,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 10, "name": "KFC", "invoiceNumber": "4467", "invoiceDate": "17/10/2022"
      , "invoiceDueDate": "28/12/2022", "openAmount": 16890, "invoiceAmount": 17890, "PayableAmount": 15000,
      "currency": "USD", "paymentStatus": "Pending"
    },
    {
      "id": 11, "name": "Food Lion", "invoiceNumber": "2367", "invoiceDate": "18/11/2022"
      , "invoiceDueDate": "19/12/2022", "openAmount": 17890, "invoiceAmount": 20000, "PayableAmount": 16780,
      "currency": "USD", "paymentStatus": "Pending"
    }
  ]
  const [rows, setRows] = useState(InitRows);
  return (
    <section className="vh-100">
      <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <a className="navbar-brand mb-0 h1" href="#">
          <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" width={150} height={50} alt="" />
        </a>
        <div class="topnav-right">
          <a class="navbar-brand" href="#">
            Welcome CocaCola
          </a>
        </div>
      </nav>
      <div className="container-fluid h-custom">
        <form onSubmit={handleSubmit}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Invoice Number</th>
                <th scope="col">Invoice Date</th>
                <th scope="col">Invoice Due Date</th>
                <th scope="col">Open Amount</th>
                <th scope="col">Invoice Amount</th>
                <th scope="col">Payable Amount</th>
                <th scope="col">Currency</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Select</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((element) => (
                <tr>
                  <th scope="row">{element.id}</th>
                  <td>{element.name}</td>
                  <td>{element.invoiceNumber}</td>
                  <td>{element.invoiceDate}</td>
                  <td>{element.invoiceDueDate}</td>
                  <td>{element.openAmount}</td>
                  <td>{element.invoiceAmount}</td>
                  <td>{element.PayableAmount}</td>
                  <td>{element.currency}</td>
                  <td>{element.paymentStatus}</td>
                  <td>
                    <div className="form-check">
                      <input onChange={(e) => handleTick(e, element.id)} className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-sm" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Send Email</button>
          </div>
        </form>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* Copyright */}
        <div className="text-white mb-3 mb-md-0">
          PayPal © 2022. All rights reserved.
        </div>
        {/* Copyright */}
        {/* Right */}
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        {/* Right */}
      </div>
    </section>
  )
}
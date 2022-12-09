import { React } from 'react';
import './App.css';
import { Login } from "./Login"
import { Table } from "./Table";
import { Email } from "./Email";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes >
        <Route path="/" element={<Login />}></Route>
        <Route path="/Table" element={<Table />}></Route>
        <Route path="/Email" element={<Email />}></Route>
      </Routes >
    </div>
  );
}

export default App;

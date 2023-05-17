import logo from './logo.svg';
import './App.css';
import Header from "./parts/Header"
import EmployeePage from "./pages/EmployeePage"
import {useEffect, useState} from "react";
import Main from "./Main";

const App = () => {





    // fetch('api/v1/employees', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         name: "Elijah",
    //         email: "elijah.ayers@gmail.com",
    //         monthsEmployed: 0
    //     }),
    //     headers: {
    //         "Content-type": 'application/json'
    //     },
    // })

    return (
        <Main />
    );
}

export default App;

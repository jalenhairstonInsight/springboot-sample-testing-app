import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from "./App";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import EmployeePage from "./pages/EmployeePage";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/employees",
        element: <EmployeePage />,
    },
    {
        path: "/new",
        element: <CreateEmployeePage />,
    },
])
function Main() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );

}
export default Main;
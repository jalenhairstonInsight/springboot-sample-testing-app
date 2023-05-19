import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import CreateEmployeePage from "./pages/CreateEmployeePage";
import EmployeePage from "./pages/EmployeePage";
import Home from "./pages/Home";
import UpdateEmployeePage from "./pages/UpdateEmployeePage";
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
    {
        path: "/:employeeId",
        element: <UpdateEmployeePage />,
    },

])
function Main() {
    return (
        <React.StrictMode>
            <div id="appBody">
                <RouterProvider router={router} />
            </div>
        </React.StrictMode>
    );

}
export default Main;
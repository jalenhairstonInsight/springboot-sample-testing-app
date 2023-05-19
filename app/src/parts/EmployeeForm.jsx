import {useEffect, useState} from "react";

function EmployeeForm(props) {
const [employee, setEmployee] = useState([])
const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (props.employeeId) {
            setLoading(true)
            console.log(props.employeeId)
            fetch('api/v1/employees/' + props.employeeId)
                .then(response => response.json())
                .then((data) => {
                    setEmployee(data)
                    setLoading(false)
                });
        }
    },[])

    if (loading) {
        return <p>Loading ...</p>
    }

    return (
        <>
            <div id="employeeForm">
                <div className="employeeFormField">
                    <label htmlFor="name">Name:</label>
                    {props.employeeId ?
                        <input id="name" name="name" type="text" defaultValue={employee.name}></input> :
                        <input id="name" name="name" type="text"></input>
                    }

                </div>
                <div className="employeeFormField">
                    <label htmlFor="email">Email:</label>
                    {props.employeeId ?
                        <input id="email" name="email" type="text" defaultValue={employee.email}></input> :
                        <input id="email" name="email" type="text"></input>
                    }
                </div>
                <div className="employeeFormField">
                    <label htmlFor="monthsEmployed">Months Employed:</label>
                    {props.employeeId ?
                        <input id="monthsEmployed" name="monthsEmployed" type="text" defaultValue={employee.monthsEmployed}></input> :
                        <input id="monthsEmployed" name="monthsEmployed" type="text"></input>
                    }
                </div>
                <div id="submitForm">
                    <button
                        onClick={() => submitForm(props.employeeId)}
                    >Submit</button>
                </div>
                {props.employeeId &&
                    <div id="deleteButton">
                        <button
                            onClick={() => deleteEmployee(props.employeeId)}
                        >Delete Employee</button>
                    </div>
                }

            </div>

        </>
    )
}

export default EmployeeForm

function submitForm(employeeId) {

    let requestBody = [{
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        monthsEmployed: document.getElementById('monthsEmployed').value
    }]
    let endpoint = "api/v1/employees";
    let method = "POST"
    if (employeeId) {
        method = "PUT"
        requestBody = requestBody[0]
        endpoint += "/" + employeeId
    }
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    // console.log(endpoint, requestOptions)
    fetch(endpoint, requestOptions)
        .then(response => {window.location.href = "employees"})

}

function deleteEmployee(employeeId) {
    let formDiv = document.getElementById('employeeForm')
    fetch('api/v1/employees/' + employeeId, { method: 'DELETE' })
        .then(() => formDiv.innerHTML = 'Delete successful');
}
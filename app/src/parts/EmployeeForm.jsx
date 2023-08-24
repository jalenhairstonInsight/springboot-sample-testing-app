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
                    <label className="fieldLabel" htmlFor="name">Name:</label>
                    {props.employeeId ?
                        <input className="textBox" id="name" name="name" type="text" defaultValue={employee.name}></input> :
                        <input className="textBox" id="name" name="name" type="text"></input>
                    }

                </div>
                <div className="employeeFormField">
                    <label className="fieldLabel" htmlFor="email">Email:</label>
                    {props.employeeId ?
                        <input className="textBox" id="email" name="email" type="text" defaultValue={employee.email}></input> :
                        <input className="textBox" id="email" name="email" type="text"></input>
                    }

                </div>
                <div className="employeeFormField" id="emailType">
                    <div className="emailTypeOptionDiv">
                    <input className="radioButton" id="workEmailYes" name="workEmail" type="radio"></input>
                    <label  className="selectLabel" htmlFor="workEmailYes">Work</label>
                    </div>
                    <div className="emailTypeOptionDiv">
                    <input className="radioButton" id="workEmailNo" name="workEmail" type="radio"></input>
                    <label  className="selectLabel" htmlFor="workEmailYes">Personal</label>
                    </div>
                </div>

                <div className="employeeFormField">
                    <label className="fieldLabel" htmlFor="monthsEmployed">Months Employed:</label>
                    {props.employeeId ?
                        <input className="textBox" id="monthsEmployed" name="monthsEmployed" type="number" defaultValue={employee.monthsEmployed}></input> :
                        <input className="textBox" id="monthsEmployed" name="monthsEmployed" type="number"></input>
                    }
                </div>
                <div className="employeeFormField">
                    <input type="checkbox" id="confirmSubmit" name="confirm" value="Bike"></input>
                        <label htmlFor="confirm">Remember Employee in System</label>
                </div>
                <div className="employeeFormField" id="submitForm">
                    <button
                        onClick={() => submitForm(props.employeeId)}
                    >Submit</button>
                </div>
                {props.employeeId &&
                    <div className="employeeFormField" id="deleteButton">
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
    let redirectTimerSeconds = 3
    fetch('api/v1/employees/' + employeeId, { method: 'DELETE' })
        .then(() => {
            let timerCountdown = setInterval(() => {
                updateRedirectTimer(formDiv, redirectTimerSeconds)
                redirectTimerSeconds -= 1
            }, 1000)
            setTimeout(() => {
                clearInterval(timerCountdown)
                window.location.href = "employees"
            }, 3000)
        });
}

function updateRedirectTimer(container, timerSeconds) {
    container.innerHTML = "<p id='redirectMessage'>Delete Successful <br> Returning to employee list in " + timerSeconds + " seconds...<p>"
}
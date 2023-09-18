import {useEffect, useState} from "react";

var submitEventAdded = false

function EmployeeForm(props) {
    const [employee, setEmployee] = useState([])
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)


    useEffect(() => {
        if (props.employeeId) {
            setLoading(true)
            fetch('api/v1/employees/' + props.employeeId)
                .then(response => response.json())
                .then((data) => {
                    setEmployee(data)
                    setLoading(false)
                    addFormEventListeners(props)
                });
        } else {
            addFormEventListeners(props)
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
                        <input className="textBox updateSubmit" id="name" name="name" type="text" defaultValue={employee.name}></input> :
                        <input className="textBox updateSubmit" id="name" name="name" type="text" ></input>
                    }

                </div>
                <div className="employeeFormField">
                    <label className="fieldLabel" htmlFor="email">Email:</label>
                    {props.employeeId ?
                        <input className="textBox updateSubmit" id="email" name="email" type="text" defaultValue={employee.email} ></input> :
                        <input className="textBox updateSubmit" id="email" name="email" type="text"></input>
                    }

                </div>
                <div className="employeeFormField" id="emailType">
                    <div className="emailTypeOptionDiv">
                    <input className="radioButton updateSubmit" id="isWorkEmail" name="emailType" type="radio"></input>
                    <label  className="selectLabel" htmlFor="isWorkEmail">Work</label>
                    </div>
                    <div className="emailTypeOptionDiv">
                    <input className="radioButton updateSubmit" id="isPersonalEmail" name="emailType" type="radio"></input>
                    <label  className="selectLabel" htmlFor="isPersonalEmail">Personal</label>
                    </div>
                </div>

                <div className="employeeFormField">
                    <label className="fieldLabel" htmlFor="monthsEmployed">Months Employed:</label>
                    {props.employeeId ?
                        <input className="textBox updateSubmit" id="monthsEmployed" name="monthsEmployed" type="number" defaultValue={employee.monthsEmployed}></input> :
                        <input className="textBox updateSubmit" id="monthsEmployed" name="monthsEmployed" type="number"></input>
                    }
                </div>
                <div className="employeeFormField">
                    <input className="updateSubmit" type="checkbox" id="confirmSubmit" name="confirm"></input>
                        <label htmlFor="confirmSubmit">Remember Employee in System</label>
                </div>
                <div className="employeeFormField" id="submitForm">
                    <button
                        disabled
                        id="submitButton"
                    >Submit</button>
                </div>
                {props.employeeId &&
                    <div className="employeeFormField" id="deleteButtonContainer">
                        <button
                            id="deleteButton"
                            onClick={() => deleteEmployee(props.employeeId)}
                        >Delete Employee</button>
                    </div>
                }
            </div>

        </>
    )
}

export default EmployeeForm

function addFormEventListeners(props) {
    let updateSubmitElements = document.getElementsByClassName("updateSubmit")
    for (let element of updateSubmitElements) {
        element.addEventListener("input", (event) => {
            updateSubmitButtonStatus(props)
        })
    }
    // document.getElementById("submitButton").addEventListener("load", (event) => {
    //     updateSubmitButtonStatus()
    // })
}


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

function updateSubmitButtonStatus(props) {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let emailTypeSelected = document.getElementById("isWorkEmail").checked || document.getElementById("isPersonalEmail").checked
    let monthsEmployed = document.getElementById('monthsEmployed').value
    let confirmSubmit = document.getElementById('confirmSubmit').checked
    let validations = {
        name: name.length > 0,
        email: email.length > 0 && email.includes("@") && (email.includes(".com") || email.includes(".net") || email.includes(".org")),
        emailTypeSelected: emailTypeSelected,
        monthsEmployed: monthsEmployed > 0,
        confirmSubmit: confirmSubmit
    }
    if (validations.name && validations.email && validations.emailTypeSelected && validations.monthsEmployed && validations.confirmSubmit) {
        document.getElementById("submitButton").disabled = false
        if (!submitEventAdded) {
            document.getElementById("submitButton").addEventListener("click", (event) => {
                submitForm(props.employeeId)
            })
            submitEventAdded = true
        }
    } else {
        document.getElementById("submitButton").disabled = true
    }
}

function updateRedirectTimer(container, timerSeconds) {
    container.innerHTML = "<p id='redirectMessage'>Delete Successful <br> Returning to employee list in " + timerSeconds + " seconds...<p>"
}
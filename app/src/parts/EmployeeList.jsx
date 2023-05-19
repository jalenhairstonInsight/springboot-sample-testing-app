import {useEffect, useState} from "react";



function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('api/v1/employees')
            .then(response => response.json())
            .then((data) => {
                setEmployees(data)
                setLoading(false)
            });
    },[])

    if (loading) {
        return <p>Loading ...</p>
    }

    return (
        <>
            <div id="employeeList">
            {employees.length === 0 && <p id="emptyListMessage">There are no employees to display currently.</p>}
            {employees.map(employee =>
                <div id="employeeDiv" key={employee.id}
                     onClick={() => window.location.href = "employees-" + employee.id}
                >
                    <div id="employeeName">{employee.name}</div>
                    <div id="employeeInfo">
                        <div id="employeeEmail"><p>Email: {employee.email}</p></div>
                        <div id="employeeMonthsEmployed"><p>Months Employed: {employee.monthsEmployed}</p></div>
                    </div>
                </div>
            )}
            </div>
        </>
    );
}

export default EmployeeList
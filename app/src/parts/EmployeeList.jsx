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
        <div className="App">
            <header className="App-header">
                <p>
                    employees
                </p>
                {employees.map(employee =>
                    <div className="employeeDiv" key={employee.id}>
                        <div>Name: {employee.name}</div>
                        <div className="employeeInfoDiv">
                            <div>Email: {employee.email}</div>
                            <div>Months Employed: {employee.monthsEmployed}</div>
                        </div>
                    </div>
                )}

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default EmployeeList
import {useEffect, useState} from "react";



function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(false)
    const [employeeStartIndex, setEmployeeStartIndex] = useState(0)
    const [numEmployeesPerPage, setNumEmployeesPerPage] = useState(5)
    useEffect(() => {
        setLoading(true)
        fetch('api/v1/employees')
            .then(response => response.json())
            .then((data) => {
                setEmployees(data)
                setLoading(false)
            });
    },[])
    let newIndex;

    if (loading) {
        return <p>Loading ...</p>
    }

    return (
        <>
            <div id="employeeListContainer">
                {employees.length === 0 && <p id="emptyListMessage">There are no employees to display currently.</p>}

                {employees.length > 0 && <div id="employeeListOptions">
                    <div id="numberOfEntries">
                        <p>Showing</p>
                        <input id="numEntriesPerPage" type="number" min="0" max="20" value={numEmployeesPerPage}
                               onChange={() => {
                                   setNumEmployeesPerPage(parseInt(document.getElementById("numEntriesPerPage").value))
                               }}
                        ></input>
                        {numEmployeesPerPage > 1 ? <p>employees</p> : <p>employee</p>}
                    </div>
                    <div id="pageButtons">
                        <p id="pageNumberDisplay">
                            Page {Math.floor(employeeStartIndex / numEmployeesPerPage) + 1} of {Math.floor((employees.length-1) / numEmployeesPerPage) + 1}
                        </p>
                        <button className="employeeListCaret" id="employeePreviousCaret" disabled={employeeStartIndex - numEmployeesPerPage < 0}
                                onClick={() => {
                            setEmployeeStartIndex(employeeStartIndex - numEmployeesPerPage)
                        }}
                        >&#9650;</button>
                        <button className="employeeListCaret" id="employeeNextCaret" disabled={employeeStartIndex + numEmployeesPerPage > employees.length}
                                onClick={() => {
                            setEmployeeStartIndex(employeeStartIndex + numEmployeesPerPage)
                                    console.log(employeeStartIndex, numEmployeesPerPage)
                        }}
                        >&#9650;</button>
                    </div>
                </div>}
                <div id="employeeList">
                    {employees.slice(employeeStartIndex, employeeStartIndex + numEmployeesPerPage).map((employee, index, slicedArray) =>
                        <div className="employeeDiv" id={"employeeDiv" + (slicedArray.length - (index + 1))} key={employee.id}
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
            </div>
        </>
    );
}

export default EmployeeList
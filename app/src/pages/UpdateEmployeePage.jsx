import Header from "../parts/Header"
import EmployeeForm from "../parts/EmployeeForm";
function UpdateEmployeePage() {
    var url = window.location.href
    var employeeId = url.substring(url.lastIndexOf("-") + 1)
    return (
        <>
            <Header />
            <div className="pageTitle"><p>Update Employee #{employeeId}</p></div>
            <EmployeeForm employeeId={employeeId}/>
        </>
    )
}

export default UpdateEmployeePage
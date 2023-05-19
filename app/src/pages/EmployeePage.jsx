import Header from "../parts/Header"
import EmployeeList from "../parts/EmployeeList";
function EmployeePage() {
    return (
        <>
            <Header />
            <div className="pageTitle"><p>Employee List</p></div>
            <EmployeeList />
        </>
    )
}

export default EmployeePage
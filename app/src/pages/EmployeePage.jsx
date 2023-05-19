import Header from "../parts/Header"
import EmployeeList from "../parts/EmployeeList";
function EmployeePage() {
    return (
        <>
            <Header />
            <div id="pageTitle"><p>Employee List</p></div>
            <EmployeeList />
        </>
    )
}

export default EmployeePage
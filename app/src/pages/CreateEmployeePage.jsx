import Header from "../parts/Header"
import EmployeeForm from "../parts/EmployeeForm";
function CreateEmployeePage() {
    return (
        <>
            <Header />
            <div className="pageTitle"><p>New Employee</p></div>
            <EmployeeForm />
        </>
    )
}

export default CreateEmployeePage
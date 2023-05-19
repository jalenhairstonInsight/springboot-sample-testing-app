import Header from "../parts/Header"
import EmployeeList from "../parts/EmployeeList";
function CreateEmployeePage() {
    return (
        <>
            <Header />
            <div className="pageTitle"><p>Employee Website</p></div>
            <div id="homeDiv">
            <p id="homeText">Welcome to Employee Website! This is a sample application for testing CRUD operations with
            UI and backend components. Its intended use is for POC and sample testing for the Insight Enterprises
            QA Practice. Please explore the simple application functionality of displaying, creating, updating, and
            deleting Employee records.</p>
            </div>
        </>
    )
}

export default CreateEmployeePage
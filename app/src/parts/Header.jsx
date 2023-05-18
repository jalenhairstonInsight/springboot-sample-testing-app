import logo from "../logo.svg";

function Header() {
    let viewEmployeeLink = "employees"
    let newEmployeeLink = "new"
    let home = "home"
    return (
    <div id="container">
        <div id="headerTitleDiv">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="headerButton"
                onClick={() => window.location.href = home}
            >
                <p id="employeeWebsite">Employee Website</p>
            </div>
        </div>
        <div className="headerButton" id="employees"
             onClick={() => window.location.href = viewEmployeeLink}
        >
            <p>View Employees</p>
        </div>
        <div className="headerButton" id="newEmployee"
             onClick={() => window.location.href = newEmployeeLink}
        >
            <p>New Employee</p>
        </div>
    </div>
    )
}

export default Header;

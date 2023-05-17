import logo from "../logo.svg";

function Header() {
    var viewEmployeeLink = "employees"
    var newEmployeeLink = "new"
    var home = "home"
    return (
    <div id="container">
        <div id="headerTitleDiv">
            <img src={logo} className="App-logo" alt="logo" />
            <p><a href={home}>Employee Website </a></p>
        </div>
        <div id="employees">
            <p><a href={viewEmployeeLink}>View Employees </a> </p>
        </div>
        <div id="newEmployee">
            <p><a href={newEmployeeLink}>New Employee </a></p>
        </div>
    </div>
    )
}

export default Header;

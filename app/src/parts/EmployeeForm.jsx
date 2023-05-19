function EmployeeForm() {
    return (
        <>
            <div id="employeeForm">
                <div className="employeeFormField">
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text"></input>
                </div>
                <div className="employeeFormField">
                    <label htmlFor="name">Email:</label>
                    <input name="name" type="text"></input>
                </div>
                <div id="submitForm">
                    <button>Submit</button>
                </div>
            </div>

        </>
    )
}

export default EmployeeForm
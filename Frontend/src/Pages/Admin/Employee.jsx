import { useState, useEffect } from "react";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import employeeService from "../../api/EmpApi";
import SideBar from "../../Component/Sidebar";
import "../Pages.css";
const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [showForm, setShowForm] = useState(false); //toggle add Tent


    // Fetch all employees when the component mounts
    useEffect(() => {
        const loadEmployee = async () => {
            try {
                const data = await employeeService.getEmployees();
                setEmployees(data);
                localStorage.setItem("employeeData", JSON.stringify(data));
            } catch (error) {
                console.error(error);
                const cachedData = localStorage.getItem("employeeData");
                if (cachedData) {
                    setEmployees(JSON.parse(cachedData));
                } else {
                    setEmployees([]);
                    console.error(error);
                }
            }
        };
        loadEmployee();
    }, []);

    // Handle adding a new employee
    const handleAddEmployee = async (e) => {
        e.preventDefault();
        const newEmployee = {
            email,
            name,
            birthDate,
            phone,
            position,
            salary,
        };
        try {
            const data = await employeeService.addEmployee(newEmployee);
            const updateEmployee =  [...employees, data]
            setEmployees(updateEmployee);
            localStorage.setItem("employeeData", JSON.stringify(updateEmployee));
            resetForm();
        } catch (error) {
            console.error(error);
            const data = [...employees, newEmployee];
            setEmployees(data);
            localStorage.setItem("EmployeeData", JSON.stringify(data));
            resetForm();
        }
    }

    // Handle deleting an employee
    const handleDeleteEmployee = async(email) => {
        try {
            await employeeService.deleteEmployee(email);
            const updateEmployee = employees.filter((emp) => emp.email !== email);
            setEmployees(updateEmployee);
            localStorage.setItem("employeeData", JSON.stringify(updateEmployee));
        } catch (error) {
            console.error(error);
            const localActivity = employees.filter((employee) => employee.email != email);
            setEmployees(localActivity);
            localStorage.setItem("employeeData", JSON.stringify(localActivity));
        }
 
    };

    // Reset form
    const resetForm = () => {
        setEmail("");
        setName("");
        setBirthDate("");
        setPhone("");
        setPosition("");
        setSalary("");
    };

    return (
        <div className="emp-container">
            <SideBar></SideBar>
            <div className="emp">
            <h1>Employee Management</h1>
            <div className="add-btn">
                {/* Button to add new */}
                <Button
                    variant="contained"
                    sx={{ background: "linear-gradient(90deg, rgba(55,154,55,1) 0%, rgba(3,255,113,1) 29%, rgba(99,236,12,1) 100%)", color: "black" }}

                    onClick={() => setShowForm(!showForm)} // Toggle form visibility
                >
                    {showForm ? "Cancel" : "Add New Employee"}
                </Button>
                {/* Add New Tent Form */}
                {showForm && (
                    <div className="form-box">
                        <h2>Add Employee</h2>
                        <div className="add-activity-form">
                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ margin: "10px" }}
                            />
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                sx={{ margin: "10px" }}
                            />
                            <TextField
                                label="Birth Date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                sx={{ margin: "10px" }}
                            />
                            <TextField
                                label="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                sx={{ margin: "10px" }}
                            />
                            <TextField
                                label="Position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                sx={{ margin: "10px" }}
                            />
                            <TextField
                                label="Salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                sx={{ margin: "10px" }}
                            />

                        <Button variant="contained" onClick={handleAddEmployee}>Add Employee</Button>
                        </div>
                    </div>
                )}
            </div>
            <h2>Employee List</h2>
            <TableContainer component={Paper}>
                <Table sx={{minWidth:750 }} aria-label="simple table" >
                    <TableHead className="name-bar">
                        <TableRow>
                            <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Email</TableCell>
                            <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Name</TableCell>
                            <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Birth Date</TableCell>
                            <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Phone</TableCell>
                            <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Position</TableCell>
                            <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Salary</TableCell>
                            <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="back-row">
                        {employees.map((employee) => (
                            <TableRow key={employee.email}>
                                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>{employee.email}</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>{employee.name}</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>{employee.birthDate}</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>{employee.phone}</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>{employee.position}</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>${employee.salary}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handleDeleteEmployee(employee.email)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div> 
        </div>
    );
};

export default Employee;

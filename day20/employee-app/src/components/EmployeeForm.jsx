import { useState, useEffect } from "react";

function EmployeeForm({ onAdd, onUpdate, editingEmployee }) {

  const [employee, setEmployee] = useState({
    empId: "",
    name: "",
    gender: "",
    salary: "",
    department: "",
    email: ""
  });

  useEffect(() => {

    if (editingEmployee) {

      setEmployee({
        id: editingEmployee.id,
        empId: editingEmployee.empId || "",
        name: editingEmployee.name || "",
        gender: editingEmployee.gender || "",
        salary: editingEmployee.salary || "",
        department: editingEmployee.department || "",
        email: editingEmployee.email || ""
      });

    } else {

      setEmployee({
        empId: "",
        name: "",
        gender: "",
        salary: "",
        department: "",
        email: ""
      });

    }

  }, [editingEmployee]);

  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!employee.empId || !employee.name) {
      alert("Employee ID and Name are required");
      return;
    }

    if (employee.id) {
      onUpdate(employee);
    } else {
      onAdd(employee);
    }

    setEmployee({
      empId: "",
      name: "",
      gender: "",
      salary: "",
      department: "",
      email: ""
    });

  };

  return (

    <div className="form-container">

      <h2>
        {employee.id ? "Update Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          id="empId"
          type="text"
          name="empId"
          placeholder="Employee ID (EMP101)"
          value={employee.empId}
          onChange={handleChange}
          required
        />

        <input
          id="empName"
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          required
        />

        <select
          id="gender"
          name="gender"
          value={employee.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          id="salary"
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />

        <select
          id="department"
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
        />

        <button
          id="addEmployeeBtn"
          type="submit"
        >
          {employee.id ? "Update Employee" : "Add Employee"}
        </button>

      </form>

    </div>

  );
}

export default EmployeeForm;
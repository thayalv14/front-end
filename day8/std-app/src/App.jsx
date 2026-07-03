import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const [student, setStudent] = useState({
    id: "",
    name: "",
    department: "",
    year: "",
    section: "",
    dob: "",
    phone: "",
    address: "",
    status: "Absent",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = () => {
    if (
      student.id === "" ||
      student.name === "" ||
      student.department === "" ||
      student.year === "" ||
      student.section === "" ||
      student.dob === "" ||
      student.phone === "" ||
      student.address === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    setStudents([...students, student]);

    setStudent({
      id: "",
      name: "",
      department: "",
      year: "",
      section: "",
      dob: "",
      phone: "",
      address: "",
      status: "Absent",
    });
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  const filteredStudents = students.filter(
    (s) =>
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = students.length;
  const present = students.filter((s) => s.status === "Present").length;
  const absent = students.filter((s) => s.status === "Absent").length;

  return (
    <div className="container">

      {/* HEADER */}
      <div className="header">
        <h1>🎓 Student Management System</h1>
        <p>Manage Student Records Easily</p>
      </div>

      {/* DASHBOARD */}
      <div className="dashboard">
        <div className="card blue">Total Students: {total}</div>
        <div className="card green">Present: {present}</div>
        <div className="card red">Absent: {absent}</div>
      </div>

      {/* FORM */}
      <div className="form">

        <input
          name="id"
          placeholder="Student ID"
          value={student.id}
          onChange={handleChange}
        />

        <input
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <select
          name="department"
          value={student.department}
          onChange={handleChange}
        >
          <option value="">Department</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
          <option>EEE</option>
          <option>MECH</option>
          <option>CIVIL</option>
        </select>

        <select
          name="year"
          value={student.year}
          onChange={handleChange}
        >
          <option value="">Year</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

        {/* SECTION */}
        <select
          name="section"
          value={student.section}
          onChange={handleChange}
        >
          <option value="">Section</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>

        <input
          type="date"
          name="dob"
          value={student.dob}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
        />

        <div className="attendance">
          <label>
            <input
              type="radio"
              name="status"
              value="Absent"
              checked={student.status === "Absent"}
              onChange={handleChange}
            />
            Absent
          </label>

          <label>
            <input
              type="radio"
              name="status"
              value="Present"
              checked={student.status === "Present"}
              onChange={handleChange}
            />
            Present
          </label>
        </div>

        <button onClick={addStudent}>➕ Add Student</button>
      </div>

      {/* SEARCH */}
      <div className="search">
        <input
          placeholder="Search by ID or Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Section</th>
              <th>DOB</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="10">No Students Found</td>
              </tr>
            ) : (
              filteredStudents.map((s, i) => (
                <tr key={i}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.department}</td>
                  <td>{s.year}</td>
                  <td>{s.section}</td>
                  <td>{s.dob}</td>
                  <td>{s.phone}</td>
                  <td>{s.address}</td>

                  <td>
                    {s.status === "Present" ? (
                      <span className="present">🟢 Present</span>
                    ) : (
                      <span className="absent">🔴 Absent</span>
                    )}
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteStudent(i)}
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default App;
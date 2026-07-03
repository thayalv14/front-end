import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const [student, setStudent] = useState({
    id: "",
    name: "",
    department: "",
    year: "",
    phone: "",
    status: "Absent",
  });

  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setStudent({
      id: "",
      name: "",
      department: "",
      year: "",
      phone: "",
      status: "Absent",
    });
    setEditIndex(null);
  };

  const saveStudent = () => {
    if (
      !student.id ||
      !student.name ||
      !student.department ||
      !student.year ||
      !student.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = student;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, student]);
    }

    clearForm();
  };

  const editStudent = (index) => {
    setStudent(students[index]);
    setEditIndex(index);
  };

  const deleteStudent = (index) => {
    if (window.confirm("Delete this student?")) {
      setStudents(students.filter((_, i) => i !== index));
    }
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

      <div className="header">
        <h1>🎓 Student Management System</h1>
        <p>Manage Student Records Easily</p>
      </div>

      <div className="dashboard">
        <div className="card blue">
          <h2>{total}</h2>
          <p>Total Students</p>
        </div>

        <div className="card green">
          <h2>{present}</h2>
          <p>Present</p>
        </div>

        <div className="card red">
          <h2>{absent}</h2>
          <p>Absent</p>
        </div>
      </div>

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

        <input
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
        />

        <div className="attendance">
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
        </div>

        <button onClick={saveStudent}>
          {editIndex === null ? "➕ Add Student" : "✏ Update Student"}
        </button>

        <button className="clear-btn" onClick={clearForm}>
          Clear
        </button>

      </div>

      <div className="top-bar">
        <input
          placeholder="Search by ID or Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="7">No Students Found</td>
              </tr>
            ) : (
              filteredStudents.map((s, index) => (
                <tr key={index}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.department}</td>
                  <td>{s.year}</td>
                  <td>{s.phone}</td>

                  <td>
                    <span
                      className={
                        s.status === "Present"
                          ? "present"
                          : "absent"
                      }
                    >
                      {s.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => editStudent(index)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteStudent(index)}
                    >
                      Delete
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
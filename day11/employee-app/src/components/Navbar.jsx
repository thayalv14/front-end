import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>👨‍💼 Employee Management</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </nav>
  );
}

export default Navbar;
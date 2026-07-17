import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUserShield,
  FaEye,
  FaEyeSlash,
  FaBuilding,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState("employee");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = username.trim();
    const pass = password.trim();

    // ================= ADMIN LOGIN =================

    if (loginType === "admin") {

      if (user.toLowerCase() === "admin" && pass === "admin123") {

        localStorage.clear();

        localStorage.setItem("role", "admin");
        localStorage.setItem("username", "Admin");

        navigate("/home");

      } else {

        alert("Invalid Admin Username or Password");

      }

      return;
    }

    // ================= EMPLOYEE LOGIN =================

    try {

      const response = await fetch(
        "https://6a4b3685f5eab0bb6b625712.mockapi.io/Empolyees"
      );

      const employees = await response.json();

      const employee = employees.find(
        (emp) =>
          emp.empId &&
          emp.empId.toLowerCase() === user.toLowerCase()
      );

      if (!employee) {

        alert("Employee ID Not Found");

        return;

      }

      if (pass !== "1234") {

        alert("Wrong Password");

        return;

      }

      localStorage.clear();

      localStorage.setItem("role", "employee");
      localStorage.setItem("username", employee.name);
      localStorage.setItem("employeeId", employee.empId);

      navigate("/home");

    } catch (error) {

      console.log(error);

      alert("Unable to connect to server");

    }
  };
    return (
    <div className="login-page">

      <div className="login-card">

        <div className="company-header">

          <FaBuilding className="company-logo" />

          <h1>ABC Technology</h1>

          <p>Employee Management System</p>

        </div>

        {/* Login Type */}

        <div className="login-switch">

          <button
            type="button"
            className={loginType === "admin" ? "active" : ""}
            onClick={() => {
              setLoginType("admin");
              setUsername("");
              setPassword("");
            }}
          >
            <FaUserShield />
            Admin
          </button>

          <button
            type="button"
            className={loginType === "employee" ? "active" : ""}
            onClick={() => {
              setLoginType("employee");
              setUsername("");
              setPassword("");
            }}
          >
            <FaUser />
            Employee
          </button>

        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <label>
              {loginType === "admin"
                ? "Admin Username :"
                : "Employee ID :"}
            </label>

            <input
              type="text"
              placeholder={
                loginType === "admin"
                  ? "Enter Admin Username"
                  : "Enter Employee ID (EMP101)"
              }
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <label>Password :</label>

            <div className="password-field">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
                            <span
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

          </div>

          <div className="login-options">

            <label className="remember-me">

              <input
                type="checkbox"
              />

              Remember Me

            </label>

            <a
              href="#"
              className="forgot-password"
              onClick={(e) => e.preventDefault()}
            >
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            {loginType === "admin"
              ? "Login as Admin"
              : "Login as Employee"}
          </button>

        </form>

        <div className="login-footer">

          <p>
            © 2026 ABC Technology. All Rights Reserved.
          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;

  
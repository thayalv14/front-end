const API_URL = "https://6a4b3685f5eab0bb6b625712.mockapi.io/Empolyees";

// Get Employees
export const getEmployees = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

// Add Employee
export const addEmployee = async (employee) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  return await response.json();
};

// Update Employee
export const updateEmployee = async (id, employee) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  return await response.json();
};

// Delete Employee
export const deleteEmployee = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return await response.json();
};
const API_URL =
  "https://6a4b3685f5eab0bb6b625712.mockapi.io/Empolyees";


// GET all employees
export const getEmployees = async () => {

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return await response.json();

};


// ADD employee
export const addEmployee = async (employee) => {

  const response = await fetch(API_URL, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(employee),

  });


  if (!response.ok) {
    throw new Error("Failed to add employee");
  }


  return await response.json();

};


// UPDATE employee
export const updateEmployee = async (id, employee) => {

  const response = await fetch(
    `${API_URL}/${id}`,
    {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(employee),

    }
  );


  if (!response.ok) {
    throw new Error("Failed to update employee");
  }


  return await response.json();

};


// DELETE employee
export const deleteEmployee = async (id) => {

  const response = await fetch(
    `${API_URL}/${id}`,
    {

      method: "DELETE",

    }
  );


  if (!response.ok) {
    throw new Error("Failed to delete employee");
  }


  return await response.json();

};
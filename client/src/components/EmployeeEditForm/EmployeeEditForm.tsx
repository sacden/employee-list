import * as React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export const EmployeeEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    boss: "",
    status: "",
    profileImage: "",
    position: "",
    department: "",
  });

  const updateStudent = () => {
    return fetch(`http://localhost:8080/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent().then(() => {
      navigate(`/`);
    });
  };

  React.useEffect(() => {
    const response = fetch(`http://localhost:8080/employees/${id}`)
      .then((response) => response.json())
      .then((body) => setEmployee(body));
  }, []);

  return (
    <form className="container">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-20">
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`/images/people/${employee.profileImage}`} alt="" />
          <div>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="Name"
              required
              value={employee.firstName}
              onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
            />
          </div>
          <div>
            <input
              type="surname"
              name="surname"
              id="surname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="Surname"
              required
              value={employee.lastName}
              onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="Email"
              required
              value={employee.email}
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="+1 123 234 567"
              required
              value={employee.phoneNumber}
              onChange={(e) => setEmployee({ ...employee, phoneNumber: e.target.value })}
            />
          </div>
          <div>
            <input
              type="position"
              name="position"
              id="position"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="position"
              required
              value={employee.position}
              onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
            />
          </div>
          <div>
            <input
              type="department"
              name="department"
              id="department"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="department"
              required
              value={employee.department}
              onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
            />
          </div>
          <div>
            <input
              type="boss"
              name="boss"
              id="boss"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="boss"
              required
              value={employee.boss}
              onChange={(e) => setEmployee({ ...employee, boss: e.target.value })}
            />
          </div>
          <div>
            <input
              type="status"
              name="status"
              id="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="status"
              required
              value={employee.status}
              onChange={(e) => setEmployee({ ...employee, status: e.target.value })}
            />
          </div>
          <div className="flex mt-4 md:mt-6">
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

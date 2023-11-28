import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { codebooks, getCodebookItemName } from "../../helpers/codebook";

const EmployeeCreateForm = () => {
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

  const createEmployee = () => {
    return fetch(`http://localhost:8080/employees/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee().then(() => {
      navigate(`/`);
    });
  };
  return (
    <form>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-20 ">
        <div className="flex flex-col items-center pb-10">
          {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg mt-10" src={`/images/people/${employee.profileImage}`} alt="" />*/}
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline pt-10" to={`/`}>
            {" "}
            Back{" "}
          </Link>
          <div>
            <label htmlFor="name" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Name
            </label>
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
            <label htmlFor="surname" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Surname
            </label>
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
            <label htmlFor="email" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Email
            </label>
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
            <label htmlFor="phoneNumber" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Phone number
            </label>
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
            <label htmlFor="position" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Select a position option
            </label>

            <select
              id="position"
              name="position"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              value={employee.position}
              onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
            >
              {codebooks["POSITION"].map((positionCode) => (
                <option key={positionCode.code} value={positionCode.code}>
                  {getCodebookItemName("POSITION", positionCode.code)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="department" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Select a department option
            </label>
            <select
              id="department"
              name="department"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              value={employee.department}
              onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
            >
              {codebooks["DEPARTMENT"].map((departmentCode) => (
                <option key={departmentCode.code} value={departmentCode.code}>
                  {getCodebookItemName("DEPARTMENT", departmentCode.code)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="boss" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Boss
            </label>
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
            <label htmlFor="status" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Status
            </label>
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
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3 w-full"
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

export default EmployeeCreateForm;

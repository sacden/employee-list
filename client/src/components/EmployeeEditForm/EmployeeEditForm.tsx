import * as React from "react";
import { ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { codebooks, getCodebookItemName } from "../../helpers/codebook";
import Employee from "../../types/Employee";
import { Input } from "../common/Input/Input";

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

  const handleInputChange = (property: keyof Employee, e: ChangeEvent<HTMLInputElement>) => {
    setEmployee({ ...employee, [property]: e.target.value });
  };

  const updateStudent = () => {
    return fetch(`http://localhost:8080/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateStudent().then(() => {
      navigate(`/`);
    });
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employees/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const body = await response.json();
        setEmployee(body);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <form>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-20 ">
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg mt-10" src={`/images/people/${employee.profileImage}`} alt={employee.profileImage} />
          <div>
            <label htmlFor="name" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Name
            </label>

            <Input name="firstName" value={employee.firstName} onChange={(e) => handleInputChange("firstName", e)} />
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Surname
            </label>

            <Input name="surname" value={employee.lastName} onChange={(e) => handleInputChange("lastName", e)} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Email
            </label>

            <Input name="email" value={employee.email} onChange={(e) => handleInputChange("email", e)} />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Phone number
            </label>

            <Input name="phoneNumber" value={employee.phoneNumber} onChange={(e) => handleInputChange("phoneNumber", e)} />
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

            <Input name="boss" value={employee.boss} onChange={(e) => handleInputChange("boss", e)} />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm text-left font-medium text-gray-900 dark:text-white">
              Status
            </label>

            <Input name="status" value={employee.status} onChange={(e) => handleInputChange("status", e)} />
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

import * as React from "react";
import { employees } from "../../data/employees";
import { Search } from "../common/Search.tsx/Search";
import { Link } from "react-router-dom";
export const EmployeeList = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div></div>
          <Search />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {["Name", "Phone number", "Position", "Department", "Boss", "Status", "Action"].map((item) => {
                return (
                  <th key={item} scope="col" className="px-6 py-3">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={`${employee.profileImage}`} alt="Jese image" />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {employee.firstName} {employee.lastName}
                      </div>
                      <div className="font-normal text-gray-500">{employee.email}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{employee.phoneNumber}</td>
                  <td className="px-6 py-4">{employee.position}</td>
                  <td className="px-6 py-4">{employee.department}</td>
                  <td className="px-6 py-4">{employee.boss}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {employee.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={`/employees/${employee.id}/edit`}>
                      {" "}
                      Edit user{" "}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

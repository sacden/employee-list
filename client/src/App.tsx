import * as React from "react";

import "./App.css";
import { employees } from "./data/employees";

function App() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div></div>
        {/* <label htmlFor="table-search" className="sr-only"> */}
        <label className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {["Name", "Phone number", "Position", "Department", "Boss", "Status", "Action"].map((item) => {
              return (
                <th scope="col" className="px-6 py-3">
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
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit user
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

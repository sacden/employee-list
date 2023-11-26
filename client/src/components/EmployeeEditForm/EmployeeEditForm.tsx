import * as React from "react";
import { useParams } from "react-router-dom";

export const EmployeeEditForm = () => {
  const { id } = useParams();
  return (
    <form className="container">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-20">
        <div className="flex flex-col items-center pb-10">
          <img className="w-48 h-48 mb-3 rounded-full shadow-lg" src="/people/profile-picture-3.jpg" alt="" />
          <div>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
              placeholder="Name"
              required
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
            />
          </div>
          <div className="flex mt-4 md:mt-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

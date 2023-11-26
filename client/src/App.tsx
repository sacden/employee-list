import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { EmployeeEditForm } from "./components/EmployeeEditForm/EmployeeEditForm";
import { EmployeeList } from "./components/EmployeeList.tsx/EmployeeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EmployeeList />,
  },
  {
    path: "/employees/:id/edit",
    element: <EmployeeEditForm />,
  },
  // {
  //   path: "/employees/:id",
  //   element: <EmployeeDetail />,
  // },

  // {
  //   path: "/employees/create",
  //   element: <EmployeeCreateForm />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

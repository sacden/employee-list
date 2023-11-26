import * as React from "react";
import { useParams } from "react-router-dom";

export const EmployeeEditForm = () => {
  const { id } = useParams();
  return <div>User {id} </div>;
};

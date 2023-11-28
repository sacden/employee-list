import * as React from "react";
import { InputProps } from "../../../types/InputProps";

export const Input: React.FC<InputProps> = ({ name, value, onChange, ...rest }) => {
  return (
    <input
      type={name}
      name={name}
      id={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 clablock w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white my-2"
      placeholder={name}
      required
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

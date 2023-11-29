import * as React from "react";
import { LabelProps } from "../../../types/LabelProps";

export const Label: React.FC<LabelProps> = ({ name, value }) => {
  return (
    <label htmlFor={name} className="block text-sm text-left font-medium text-gray-900 dark:text-white">
      {value}
    </label>
  );
};

import { ChangeEvent } from "react";
export interface InputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

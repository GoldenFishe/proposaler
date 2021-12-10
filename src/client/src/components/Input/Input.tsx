import React, { ChangeEvent, FC } from "react";

import styles from "./style.module.css";

interface Props {
  type?: "text" | "password";
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({ type, value, onChange }) => {
  const change = (e: ChangeEvent) => onChange((e.target as HTMLInputElement).value);
  return (
    <input type={type} value={value} onChange={change} />
  );
};

Input.defaultProps = {
  type: "text"
}

export default Input;
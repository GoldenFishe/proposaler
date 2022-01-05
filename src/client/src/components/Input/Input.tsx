import React, { ChangeEvent, FC } from "react";

import styles from "./style.module.css";

interface Props {
  type?: "text" | "password";
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({ type, value, label, onChange }) => {
  const change = (e: ChangeEvent) => onChange((e.target as HTMLInputElement).value);
  return (
    <label className={styles.wrapper}>
      {label}
      <input type={type} value={value} onChange={change} />
    </label>
  );
};

Input.defaultProps = {
  type: "text"
};

export default Input;
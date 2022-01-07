import React, { ChangeEvent, FC } from "react";

import styles from "./style.module.css";

interface Props {
  type?: "text" | "password" | "file";
  value?: string;
  label: string;
  name?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Input: FC<Props> = ({
                            type,
                            value,
                            label,
                            name,
                            defaultValue,
                            onChange
                          }) => {
  const change = (e: ChangeEvent) => {
    if (onChange && type !== "file") {
      onChange((e.target as HTMLInputElement).value);
    }
  };
  return (
    <label className={styles.wrapper}>
      {label}
      <input type={type}
             value={value}
             name={name}
             onChange={change}
             defaultValue={defaultValue}
             className={styles.input} />
    </label>
  );
};

Input.defaultProps = {
  type: "text"
};

export default Input;
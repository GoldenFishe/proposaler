import React, { ChangeEvent, FC, MutableRefObject, useEffect, useRef, useState } from "react";

import styles from "./style.module.css";
import { maxLength } from "class-validator";

interface Props {
  type?: "text" | "password" | "file";
  value?: string;
  label: string;
  name?: string;
  defaultValue?: string;
  multiple?: boolean;
  autoFocus?: boolean;
  minLength?: number;
  maxLength?: number;
  invalid?: boolean;
  invalidMessage?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

const Input: FC<Props> = ({
                            type,
                            value,
                            label,
                            name,
                            defaultValue,
                            multiple,
                            autoFocus,
                            minLength,
                            maxLength,
                            invalid,
                            invalidMessage,
                            required,
                            onChange
                          }) => {
  const inputElement = useRef() as MutableRefObject<HTMLInputElement>;
  const change = (e: ChangeEvent) => {
    if (onChange && type !== "file") {
      onChange((e.target as HTMLInputElement).value);
    }
  };
  useEffect(() => {
    if (invalid && invalidMessage) {
      inputElement.current.setCustomValidity(invalidMessage);
    } else {
      inputElement.current.setCustomValidity("");
    }
  }, [invalid, invalidMessage]);
  return (
    <label className={styles.wrapper}>
      {label}
      <input type={type}
             value={value}
             name={name}
             onChange={change}
             defaultValue={defaultValue}
             autoFocus={autoFocus}
             multiple={multiple}
             minLength={minLength}
             maxLength={maxLength}
             required={required}
             ref={inputElement}
             className={styles.input} />
    </label>
  );
};

Input.defaultProps = {
  type: "text"
};

export default Input;
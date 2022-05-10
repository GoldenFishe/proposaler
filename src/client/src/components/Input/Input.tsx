import React, { ChangeEvent, FC } from "react";
import { TextInput, PasswordInput } from "@carbon/react";

import FileUploader from "./FileUploader";

export interface Props {
  type?: "file" | "text" | "password";
  value?: string;
  label: string;
  id: string;
  name?: string;
  multiple?: boolean;
  inline?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input: FC<Props> = ({
                            type,
                            value,
                            label,
                            id,
                            name,
                            multiple,
                            inline,
  placeholder,
                            onChange
                          }) => {
  const change = (e: ChangeEvent) => {
    if (onChange) {
      onChange((e.target as HTMLInputElement).value);
    }
  };

  if (type === "file") {
    return <FileUploader label={label}
                         id={id}
                         name={name}
                         value={value}
                         placeholder={placeholder}
                         multiple={multiple}
                         onChange={onChange} />;
  }

  if (type === "password") {
    return <PasswordInput labelText={label}
                          id={id}
                          type={type}
                          name={name}
                          value={value}
                          placeholder={placeholder}
                          inline={inline}
                          onChange={change} />;
  }
  return <TextInput labelText={label}
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    inline={inline}
                    onChange={change} />;
};

Input.defaultProps = {
  type: "text"
};

export default Input;
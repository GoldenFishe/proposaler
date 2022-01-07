import React, { ChangeEvent, FC } from "react";

import styles from "./style.module.css";

interface Props {
  label: string;
  value?: string;
  name?: string;
  onChange?: (value: string) => void;
}

const Textarea: FC<Props> = ({
                               label,
                               value,
                               name,
                               onChange
                             }) => {
  const change = (e: ChangeEvent) => {
    if (onChange) {
      onChange((e.target as HTMLTextAreaElement).value);
    }
  };
  return (
    <label className={styles.wrapper}>
      {label}
      <textarea value={value}
                name={name}
                rows={3}
                className={styles.textarea}
                onChange={change} />
    </label>
  );
};

export default Textarea;
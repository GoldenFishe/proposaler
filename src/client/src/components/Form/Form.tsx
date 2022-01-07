import React, { FC, FormEvent } from "react";

import styles from "./style.module.css";

interface Props {
  onSubmit: (e: FormEvent) => void;
}

const Form: FC<Props> = ({ onSubmit, children }) => {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form onSubmit={submit} className={styles.form}>
      {children}
    </form>
  );
};

export default Form;
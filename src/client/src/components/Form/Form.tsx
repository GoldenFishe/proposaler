import React, { FC, FormEvent } from "react";
import {Form as CarbonForm} from "@carbon/react";

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
    <CarbonForm onSubmit={submit} className={styles.form}>
      {children}
    </CarbonForm>
  );
};

export default Form;
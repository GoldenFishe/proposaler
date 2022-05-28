import React, { FC, FormEvent } from "react";
import {Form as CarbonForm, Stack} from "@carbon/react";

interface Props {
  className?: string;
  onSubmit: (e: FormEvent) => void;
}

const Form: FC<Props> = ({ className, onSubmit, children }) => {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <CarbonForm onSubmit={submit} className={className}>
      <Stack gap={7}>
        {children}
      </Stack>
    </CarbonForm>
  );
};

export default Form;
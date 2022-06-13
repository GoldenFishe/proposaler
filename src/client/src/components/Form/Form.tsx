import React, { FormEvent, forwardRef, ReactNode } from "react";
import { Stack } from "@carbon/react";

interface Props {
  className?: string;
  children: ReactNode;
  onSubmit?: (e: FormEvent) => void;
}

const Form = forwardRef<HTMLFormElement, Props>(({ className, onSubmit, children }, ref) => {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={submit} className={className} ref={ref}>
      <Stack gap={6}>
        {children}
      </Stack>
    </form>
  );
});

export default Form;
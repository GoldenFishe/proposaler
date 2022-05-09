import React, { ChangeEvent, FC } from "react";
import {TextArea as CarbonTextarea} from "@carbon/react";

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
    <CarbonTextarea labelText={label}
                    value={value}
                    name={name}
                    onChange={change}/>
  )
};

export default Textarea;
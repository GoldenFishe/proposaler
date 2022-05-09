import React, { FC, MouseEvent } from "react";
import { Button as KitButton } from "@carbon/react";

interface Props {
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const Button: FC<Props> = ({
                             type,
                             onClick,
                             disabled,
                             children
                           }) => {
  return (
    <KitButton type={type}
               disabled={disabled}
               onClick={onClick}>{children}
    </KitButton>
  );
};

Button.defaultProps = {
  type: "button"
};

export default Button;
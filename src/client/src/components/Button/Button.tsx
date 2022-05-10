import React, { FC, MouseEvent, ReactNode } from "react";
import { Button as KitButton } from "@carbon/react";

interface Props {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  hasIconOnly?: boolean;
  iconDescription?: string;
  renderIcon?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  onClick?: (e: MouseEvent) => void;
}

const Button: FC<Props> = ({
                             type,
                             onClick,
                             disabled,
                             hasIconOnly,
                             iconDescription,
                             renderIcon,
                             size,
                             children
                           }) => {
  return (
    <KitButton type={type}
               disabled={disabled}
               hasIconOnly={hasIconOnly}
               iconDescription={iconDescription}
               renderIcon={renderIcon}
               size={size}
               onClick={onClick}>
      {children}
    </KitButton>
  );
};

Button.defaultProps = {
  type: "button"
};

export default Button;
import React, { FC, MouseEvent } from "react";

import styles from "./style.module.css";

interface Props {
  type: "submit" | "reset" | "button";
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const Button: FC<Props> = ({
                             type,
                             onClick,
                             primary,
                             secondary,
                             disabled,
                             children
                           }) => {
  let typeClassName = "";
  if (primary) {
    typeClassName = styles.primary;
  } else if (secondary) {
    typeClassName = styles.secondary;
  }
  return (
    <button type={type}
            className={`${styles.button} ${typeClassName}`}
            disabled={disabled}
            onClick={onClick}>{children}</button>
  );
};

Button.defaultProps = {
  type: "button"
};

export default Button;
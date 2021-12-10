import React, { FC, MouseEvent } from "react";

import styles from "./style.module.css";

interface Props {
  type: "submit" | "reset" | "button";
  onClick?: (e: MouseEvent) => void;
}

const Button: FC<Props> = ({ type, onClick, children }) => {
  return (
    <button onClick={onClick} type={type}>{children}</button>
  );
};

Button.defaultProps = {
  type: "button"
};

export default Button;
import React, { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "center";
}

const Title: FC<Props> = ({
                            size,
                            children
                          }) => {
  return (
    <h1>
      {children}
    </h1>
  );
};

export default Title;
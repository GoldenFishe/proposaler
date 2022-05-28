import React, { FC, createElement } from "react";

interface Props {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "center";
}

const Title: FC<Props> = ({
                            size,
                            children
                          }) => {
  return createElement(`h${size}`, { children });
};

export default Title;
import React, { useEffect, useState } from "react";
import clsx from "clsx";

import Input, { Props as InputProps } from "../Input/Input";
import styles from "./styles.module.scss";

type Option<Value> = {
  label: string;
  value: Value;
}

export interface Props<Value> extends InputProps {
  options: Option<Value>[];
  onSelect: (option: Option<Value>) => void;
}

function SuggestInput<Value>(props: Props<Value>) {
  const [visibleSuggestions, setVisibleSuggestion] = useState(false);

  useEffect(() => {
    setVisibleSuggestion(Boolean(props.options.length));
  }, [props.options]);

  const select = (option: Option<Value>) => {
    props.onSelect(option);
  };

  return (
    <div className={styles.wrapper}>
      <Input {...props} />
      <div className={styles.options}>
        <div className={clsx("cds--list-box__menu", {
          [styles.expanded]: visibleSuggestions,
          [styles.collapsed]: !visibleSuggestions
        })}>
          {props.options.map(option => {
            return (
              <div className="cds--list-box__menu-item"
                   onClick={() => select(option)}>
                <div className="cds--list-box__menu-item__option">
                  {option.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SuggestInput;
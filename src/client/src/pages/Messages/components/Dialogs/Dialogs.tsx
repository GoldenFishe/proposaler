import React, { FC } from "react";
import clsx from "clsx";

import { DialogType } from "../../types";
import { UserType } from "../../../../types/UserType";
import Avatar from "../../../../components/Avatar/Avatar";
import styles from "./style.module.scss";

interface Props {
  dialogs: DialogType;
  selectedCompanion: UserType["id"] | null;
  onSelect: (companion: UserType["id"]) => void;
}

const Dialogs: FC<Props> = ({ dialogs, selectedCompanion, onSelect }) => {
  return (
    <div className={styles.container}>
      {Object.keys(dialogs).map(companion => {
        const [firstMessage] = dialogs[companion];
        return (
          <div onClick={() => onSelect(Number(companion))}
               key={companion}
               className={clsx(styles.dialog, { [styles.selected]: Number(companion) === selectedCompanion })}>
            <Avatar src={firstMessage.sender.avatar}
                    size="medium" />
            <p>{firstMessage.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Dialogs;
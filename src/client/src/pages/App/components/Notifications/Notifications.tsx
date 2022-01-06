import React, { FC } from "react";
import { observer } from "mobx-react";

import Notification from "./components/Notification/Notification";
import { NotificationsModel } from "../../../../models/NotificationsModel";
import styles from "./style.module.css";

interface Props {
  notificationsModel: NotificationsModel;
}

const Notifications: FC<Props> = ({ notificationsModel }) => {
  return (
    <div className={styles.notifications}>
      {notificationsModel.notifications.map(notification => <Notification key={notification.id}
                                                                          id={notification.id}
                                                                          type={notification.type}
                                                                          message={notification.message} />)}
    </div>
  );
};

export default observer(Notifications);
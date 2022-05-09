import React, { FC, useEffect } from "react";
import { ToastNotification } from "@carbon/react";

import { Notification as NotificationType, notificationsModel } from "../../../../../../models/NotificationsModel";
import styles from "./style.module.css";

const Notification: FC<NotificationType> = ({ id, type, title, message }) => {
  useEffect(() => {
    const removeTimer = window.setTimeout(() => {
      notificationsModel.remove(id);
    }, 5000);
    return () => window.clearTimeout(removeTimer);
  }, [id]);
  return (
    <ToastNotification kind={type}
                       hideCloseButton
                       title={title}
                       subtitle={message}
                       className={styles.notification}>
    </ToastNotification>
  );
};

export default Notification;
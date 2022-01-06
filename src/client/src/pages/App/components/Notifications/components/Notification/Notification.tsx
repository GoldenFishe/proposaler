import React, { FC, useEffect } from "react";

import { Notification as NotificationType, notificationsModel } from "../../../../../../models/NotificationsModel";
import styles from "./style.module.css";

const Notification: FC<NotificationType> = ({ id, type, message }) => {
  useEffect(() => {
    const removeTimer = window.setTimeout(() => {
      notificationsModel.remove(id);
    }, 5000)
    return () => window.clearTimeout(removeTimer);
  }, [id])
  
  let typeClassName = "";
  if (type === "message") typeClassName = styles.message;
  if (type === "error") typeClassName = styles.error;
  return (
    <div className={`${styles.notification} ${typeClassName}`}>
      {message}
    </div>
  );
};

export default Notification;
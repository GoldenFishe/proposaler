import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { UserModel } from "../../models/UserModel";
import EditProfile from "./components/EditProfile/EditProfile";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import styles from "./style.module.css";

interface Props {
  userModel: UserModel;
}

const Profile: FC<Props> = ({ userModel }) => {

  const { id } = useParams();
  useEffect(() => {
    if (userModel.profile?.id !== Number(id)) {
      userModel.getUserById(Number(id));
    }
  }, [id, userModel]);
  const saveChanges = (changes: FormData) => userModel.updateProfile(changes);
  return (
    <div className={styles.container}>
      {userModel.profile?.id === Number(id) ?
        <EditProfile {...userModel.profile} onSaveChanges={saveChanges} /> :
        <ViewProfile {...userModel.user} />}
    </div>
  );
};

export default observer(Profile);
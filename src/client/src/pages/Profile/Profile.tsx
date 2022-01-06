import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { UserModel } from "../../models/UserModel";

interface Props {
  userModel: UserModel;
}

const Profile: FC<Props> = ({ userModel }) => {
  const { id } = useParams();
  useEffect(() => {
    userModel.getUserById(Number(id));
  }, [id, userModel]);
  return (
    <div>
      {userModel.user?.username}
    </div>
  );
};

export default observer(Profile);
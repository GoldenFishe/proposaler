import React, { FC } from "react";
import { observer } from "mobx-react";
import { UserModel } from "../../models/UserModel";

interface Props {
  userModel: UserModel;
}

const Profile: FC<Props> = ({ userModel }) => {
  return (
    <div>
      {userModel.username}
    </div>
  );
};

export default observer(Profile);
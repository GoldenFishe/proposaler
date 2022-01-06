import React, { FC } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import { UserModel } from "../../../../models/UserModel";

interface Props {
  userModel: UserModel;
}

const Topbar: FC<Props> = ({ userModel }) => {
  const isAuthorized = userModel.self !== undefined;
  return (
    <div>
      <Link to="/proposals">Proposals</Link>
      {isAuthorized && <Link to={`/profile/${userModel.self?.id}`}>Profile</Link>}
      {isAuthorized && <Link to="/proposals/create">Create Proposal</Link>}
      {!isAuthorized && <Link to="/sign-in">Sign In</Link>}
      {!isAuthorized && <Link to="/sign-up">Sign Up</Link>}
    </div>
  );
};

export default observer(Topbar);
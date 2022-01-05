import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  userId: number;
  isAuthorized: boolean;
}

const Topbar: FC<Props> = ({ userId, isAuthorized }) => {
  return (
    <div>
      <Link to="/proposals">Proposals</Link>
      {isAuthorized && <Link to={`/profile/${userId}`}>Profile</Link>}
      {!isAuthorized && <Link to="/sign-in">Sign In</Link>}
      {!isAuthorized && <Link to="/sign-up">Sign Up</Link>}
    </div>
  );
};

export default Topbar;
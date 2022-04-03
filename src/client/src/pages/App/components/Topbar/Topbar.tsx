import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { observer } from "mobx-react";

import { UserModel } from "../../../../models/UserModel";
import styles from "./styles.module.css";

interface Props {
  userModel: UserModel;
}

const activeClassName = ({ isActive }: { isActive: boolean }) => {
  return `${styles.navlink} ${isActive ? styles.activeLink : ""}`;
};

const Topbar: FC<Props> = ({ userModel }) => {
  const { pathname } = useLocation();
  const isAuthorized = userModel.profile !== undefined;

  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }
  return (
    <header className={styles.topbar}>
      <nav className={styles.navigation}>
        <NavLink to="/proposals"
                 className={activeClassName}>
          Proposals
        </NavLink>
        {isAuthorized &&
          <NavLink to={`/profile/${userModel.profile?.id}`}
                   className={activeClassName}>
            Profile
          </NavLink>}
        {isAuthorized && <NavLink to="/proposals/create"
                                  className={activeClassName}>
          Create Proposal
        </NavLink>}
        {!isAuthorized && <NavLink to="/sign-in"
                                   className={activeClassName}>
          Sign In
        </NavLink>}
        {!isAuthorized && <NavLink to="/sign-up"
                                   className={activeClassName}>
          Sign Up
        </NavLink>}
      </nav>
    </header>
  );
};

export default observer(Topbar);
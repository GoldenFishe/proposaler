import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import {
  Header,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderGlobalBar,
  HeaderGlobalAction
} from "@carbon/react";
import { Search, Notification, Apps, UserAvatar } from "@carbon/icons-react";

import { UserModel } from "../../../../models/UserModel";

interface Props {
  userModel: UserModel;
}

const Topbar: FC<Props> = ({ userModel }) => {
  const { pathname } = useLocation();
  const isAuthorized = userModel.profile !== undefined;

  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }
  return (
    <Header aria-label="Enigma">
      <HeaderName prefix="">
        Enigma
      </HeaderName>
      <HeaderNavigation aria-label="Enigma">
        <HeaderMenuItem isCurrentPage={pathname === "/proposals"}
                        to="/proposals"
                        element={Link}>
          Proposals
        </HeaderMenuItem>
        {isAuthorized && (
          <>
            <HeaderMenuItem isCurrentPage={pathname === `/profile/${userModel.profile?.id}`}
                            to={`/profile/${userModel.profile?.id}`}
                            element={Link}>
              Profile
            </HeaderMenuItem>
            <HeaderMenuItem isCurrentPage={pathname === "/proposals/create"}
                            to="/proposals/create"
                            element={Link}>
              Create Proposal
            </HeaderMenuItem>
          </>
        )}
        {!isAuthorized && (
          <>
            <HeaderMenuItem isCurrentPage={pathname === "/sign-in"}
                            to="/sign-in"
                            element={Link}>
              Sign In
            </HeaderMenuItem>
            <HeaderMenuItem isCurrentPage={pathname === "/sign-up"}
                            to="/sign-up"
                            element={Link}>
              Sign Up
            </HeaderMenuItem>
          </>
        )}
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {
        }}>
          <Search />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {
        }}>
          <Notification />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Profile" onClick={() => {
        }}>
          <UserAvatar />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {
        }}>
          <Apps />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default observer(Topbar);
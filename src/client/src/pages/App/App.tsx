import React, { FC, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { observer } from "mobx-react";
import { Content } from "@carbon/react";

import Notifications from "./components/Notifications/Notifications";
import Topbar from "./components/Topbar/Topbar";
import Proposals from "../Proposals/Proposals";
import Proposal from "../Proposal/Proposal";
import CreateProposal from "../CreateProposal/CreateProposal";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Profile from "../Profile/Profile";
import { proposalsModel } from "../../models/ProposalsModel";
import { proposalModel } from "../../models/ProposalModel";
import { UserModel } from "../../models/UserModel";
import { notificationsModel } from "../../models/NotificationsModel";
import { authTokenManager } from "../../utils/authTokenManager";

interface Props {
  userModel: UserModel;
}

const App: FC<Props> = ({ userModel }) => {
  useEffect(() => {
    if (authTokenManager.getToken()) {
      userModel.getProfile();
    }
  }, [userModel]);
  return (
    <div>
      <BrowserRouter>
        <Topbar userModel={userModel} />
        <Content>
          <Notifications notificationsModel={notificationsModel} />
          <Routes>
            <Route path="/proposals">
              <Route index
                     element={<Proposals proposalsModel={proposalsModel} />} />
              <Route path=":id"
                     element={<Proposal proposalModel={proposalModel} />} />
              <Route path="create"
                     element={<CreateProposal proposalsModel={proposalsModel} />} />
            </Route>
            <Route path="/profile/:id"
                   element={<Profile userModel={userModel} />} />
            <Route path="/sign-in"
                   element={<SignIn userModel={userModel} />} />
            <Route path="/sign-up"
                   element={<SignUp userModel={userModel} />} />
            <Route path="*" element={<Navigate to="/proposals" />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </div>
  );
};

export default observer(App);

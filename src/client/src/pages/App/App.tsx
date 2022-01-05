import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Proposals from "../Proposals/Proposals";
import Proposal from "../Proposal/Proposal";
import CreateProposal from "../CreateProposal/CreateProposal";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Profile from "../Profile/Profile";
import { proposalsModel } from "../../models/ProposalsModel";
import { proposalModel } from "../../models/ProposalModel";
import { userModel } from "../../models/UserModel";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Topbar userId={1} isAuthorized={false} />
        <Routes>
          <Route path="/proposals">
            <Route element={<Proposals proposalsModel={proposalsModel} />} index />
            <Route path=":id" element={<Proposal proposalModel={proposalModel} />} />
            <Route path="create" element={<CreateProposal />} />
          </Route>
          <Route path="/profile/:id" element={<Profile userModel={userModel} />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

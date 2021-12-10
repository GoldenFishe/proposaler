import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Proposals from "./pages/Proposals/Proposals";
import Proposal from "./pages/Proposal/Proposal";
import CreateProposal from "./pages/CreateProposal/CreateProposal";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/proposals">
            <Route element={<Proposals />} index />
            <Route path=":id" element={<Proposal />} />
            <Route path="create" element={<CreateProposal />} />
          </Route>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

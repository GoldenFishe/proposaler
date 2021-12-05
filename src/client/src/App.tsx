import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Proposals from "./pages/Proposals/Proposals";
import Proposal from "./pages/Proposal/Proposal";
import CreateProposal from "./pages/CreateProposal/CreateProposal";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

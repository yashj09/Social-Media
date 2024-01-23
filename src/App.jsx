import React from "react";
import { Routes, Route } from "react-router-dom";
import Wallet from "./pages/wallet";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Wallet />} />
      </Routes>
    </>
  );
};

export default App;

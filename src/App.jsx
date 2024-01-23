import React from "react";
import { Routes, Route } from "react-router-dom";
import wallet from "./pages/wallet";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Login" component={wallet} />
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostPage from "./components/postComponent/PostPage";
import Navbar from "./components/NavigationLP/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PostPage" element={<PostPage />} />
      </Routes>
    </>
  );
};

export default App;

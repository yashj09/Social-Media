import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "./Navbar.css";
import Wallet from "../../pages/Wallet";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const SignOut = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("signout success");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="navMenu">
      <div className="navwrapper">
        <Link to="/Login" className="navbar-link">
          Login
        </Link>
        <Link to="/PostPage" className="navbar-link">
          Posts
        </Link>
        <div className="wallet">
          <Wallet />
        </div>
      </div>
      <button className="Btn navbar-link " onClick={SignOut}>
        Sign out
      </button>
    </nav>
  );
};

export default Navbar;

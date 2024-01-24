import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "./Navbar.css"; // Import your CSS file
// import WalletButton from './WalletButton';
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
        <Link to="/PostPage" className="navbar-link">
          Posts
        </Link>
        {/* <WalletButton
          className="navbar-link"
          buttonName="Connect Wallet"
          buttonColor="#010101"
        /> */}
        {/* <WalletButton className="navbar-link" /> */}
      </div>
      <button className="Btn navbar-link " onClick={SignOut}>
        Sign out
      </button>
    </nav>
  );
};

export default Navbar;

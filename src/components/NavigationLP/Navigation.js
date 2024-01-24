import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authentication/authContext';
import { getAuth, signOut } from 'firebase/auth';
import "./Navigation.css"

const Navigation = () => {
  const { isLogIn, setIsLogIn } = useAuth(); // Update variable names

  const navigate = useNavigate();
  const auth = getAuth();
  const SignOut = async () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
      console.log("signout success")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      {/* Navigation menu */}
      <nav className="my-nav">
        <div className="container">
          <div className="flex items-center justify-between header">
            <div className="logo">
              <a href="/">
                <img src="/assets/images/logo2.png" alt="Learnhattan" />
              </a>
            </div>

            <div className="nav-links">
              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#cta">Community</a>
              <a href="#footer">Contact</a>
            </div>

            <div>
              {/* Conditionally render either Sign up or Sign out button */}
              {isLogIn ? (
                <div className='Signup'>
                  <button className='Btn' onClick={SignOut}>Sign out</button>

                </div>
              ) : (
                <Link to="/Login" className="Signup">
                  <button className='Btn'>Sign up</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  )
}

export default Navigation;

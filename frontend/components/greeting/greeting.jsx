import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const loggedOut = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('Log in')}>Login</button>
      &nbsp;&nbsp;
      <button onClick={() => openModal('Sign up')}>Signup</button>
    </nav>
  );

  const loggedIn = () => (
    <nav className="nav">
      <h2 className="nav-name">{currentUser.fullname}!</h2>
      <button className="nav-button" onClick={logout}>Log out</button>
    </nav>
  );

  return currentUser ? loggedIn() : loggedOut();
};

export default Greeting;

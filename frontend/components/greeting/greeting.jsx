import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const loggedOut = () => (
    <nav className="login-signup">
      <Link to="/login">Sign in</Link>
      &nbsp;&nbsp;
      <Link to="/signup">Get started</Link>
    </nav>
  );

  const loggedIn = () => (
    <nav className="nav">
      <h2 className="nav-name">{currentUser.fullname}!</h2>
      <button className="nav-button" onClick={logout}>Sign out</button>
    </nav>
  );

  return currentUser ? loggedIn() : loggedOut();
};

export default Greeting;

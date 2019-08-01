import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal, demoLogin }) => {
  const loggedOut = () => (
    <nav className="nav-1">
      <button className="nav-login" onClick={() => openModal('Log in')}>Login</button>
      &nbsp;&nbsp;
      <button className="nav-signup" onClick={() => openModal('Sign up')}>Get started</button>
      &nbsp;&nbsp;
      <button className="nav-demo" onClick={demoLogin}>Demo</button>
    </nav>
  );

  const loggedIn = () => (
    <nav className="nav-2">
      <h2 className="nav-user">{currentUser.fullname}</h2>
      <img className="profile-pic" src="https://miro.medium.com/fit/c/64/64/1*dmbNkD5D-u45r44go_cf0g.png" alt="{currentUser.fullname}" width="32" height="32"/>
      <button className="nav-logout" onClick={logout}>Log out</button>
    </nav>
  );

  return currentUser ? loggedIn() : loggedOut();
};

export default Greeting;

import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from './modal/modal';

const Median = () => {
  return (
    <div>
      <Modal/>
      <header className="header">
        <Link to="/"><h1 className="header-logo">Median</h1></Link>
        <GreetingContainer />
      </header>
      <Switch>
      </Switch>
    </div>
  )
};

export default Median;
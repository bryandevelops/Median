import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const Median = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link"><h1>Median</h1></Link>
        <GreetingContainer />
      </header>
      <Switch>
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
      </Switch>
    </div>
  )
};

export default Median;
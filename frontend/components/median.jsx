import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import StoriesShowContainer from './stories/story_show_container';
import UpdateStoryContainer from './stories/update_story_container';
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
        <Route exact path="/stories/:storyId" component={StoriesShowContainer}/>
        <Route path="/stories/:storyId/edit" component={UpdateStoryContainer}/>
      </Switch>
    </div>
  )
};

export default Median;
import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import StoryIndexContainer from './stories/index/story_main_index_container';
import StoriesShowContainer from './stories/show/story_show_container';
import CreateStoryContainer from './stories/form/create_story_container';
import UpdateStoryContainer from './stories/form/update_story_container';

const Median = () => {
  return (
    <div>
      <Modal/>

      <header className="header">
        <Link to="/"><h1 className="header-logo">Median</h1></Link>
        <GreetingContainer />
      </header>
      
      <Switch>
        <Route exact path="/" component={StoryIndexContainer}/>
        <Route exact path="/stories/:storyId" component={StoriesShowContainer}/>
        <ProtectedRoute exact path="/stories/new" component={CreateStoryContainer}/>
        <ProtectedRoute exact path="/stories/:storyId/edit" component={UpdateStoryContainer}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  )
};

export default Median;
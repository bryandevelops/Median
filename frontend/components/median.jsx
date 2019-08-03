import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import StoryIndexContainer from './stories/story_index_container';
import StoriesShowContainer from './stories/story_show_container';
import UpdateStoryContainer from './stories/update_story_container';

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
        <Route exact path="/" component={StoryIndexContainer}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  )
};

export default Median;
import React from 'react';
import { Link } from 'react-router-dom';

class StoryShow extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchStory(this.props.match.params.storyId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.story.id != this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId);      
    }
  }

  render() {
    const { story, currentUser } = this.props;

    return(
      <div>
        <h1>{story.title}</h1>
        <p>{story.body}</p>
      </div>
    );
  }
}

export default StoryShow;
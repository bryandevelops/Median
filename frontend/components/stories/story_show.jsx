import React from 'react';
import { Link } from 'react-router-dom';

class StoryShow extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId).fail(err => this.props.history.push("/"))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.storyId !== this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId).fail(err => this.props.history.push("/"))
    }
  }

  render() {
    if (!this.props.story) {
      return <></>
    }
    
    const { story, currentUser } = this.props;
    const image = story.photo_url ? <img src={`${story.photo_url}`} alt="Photo" width="1000" height="650" /> : ""

    return(
      <div>
        {image}
        <h1>{story.title}</h1>
        <p>{story.body}</p>
      </div>
    );
  }
}

export default StoryShow;
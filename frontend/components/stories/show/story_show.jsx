import React from 'react';
import { Link } from 'react-router-dom';

class StoryShow extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId).fail(err => this.props.history.push("/"))
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.storyId !== this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId).fail(err => this.props.history.push("/"))
    }
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.story) {
      return <></>
    }
    
    const { story, currentUser } = this.props;
    const image = story.photo_url ? 
      <img src={`${story.photo_url}`} alt="Photo" className="story-show-image"/> 
      : ""
    
    return(
      <div className="story-show-container">
        <header className="story-show-header">
          <h1 className="story-show-title">{story.title}</h1>

          <Link to={`/users/${story.author_id}`}>
            <img className="profile-pic" src="https://median-aa-seeds.s3.amazonaws.com/profile_pic.jpg" alt="{currentUser.fullname}" width="32" height="32" />
          </Link>

          <Link to={`/users/${story.author_id}`}>
            <h3 className="story-show-author">{story.author}</h3>
          </Link>
        </header>

        <figure className="story-show-image-container">{image}</figure>

        <div className="story-show-body-container">
          <p className="story-show-body">{story.body}</p>
        </div>
      </div>
    );
  }
}

export default StoryShow;
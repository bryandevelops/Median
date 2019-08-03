import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = ({ story }) => {
  return(
    <div className="story-index-item-container">
      <div className="story-index-item-info">
        <Link to={`/stories/${story.id}`}>
          <h3 className="story-index-item-title">{story.title}</h3>
          <h4 className="story-index-item-body">{story.body}</h4>
        </Link>
      </div>

      <small>
        <Link to={`/users/${story.author_id}`}>
          {story.author}
        </Link>
      </small>

      <figure>
        <Link to={`/stories/${story.id}`}>
          <img src={`${story.photo_url}`} alt="Photo" className="story-index-item-image"/>
        </Link>
      </figure>
    </div>
  )
}

export default StoryIndexItem
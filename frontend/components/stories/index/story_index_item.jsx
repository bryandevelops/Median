import React from 'react';
import { Link } from 'react-router-dom';


const StoryIndexItem = ({ story }) => {
  const topics = ["Arts & Entertainment","Art","Beauty","Books","Comics","Culture","Fiction","Film","Innovation & Tech","Accessibility","Android Dev","Artificial Intelligence","Blockchain","Cryptocurrency","Cybersecurity","Data Science","Life","Addiction","Cannabis","Creativity","Disability","Family","Fitness","Society","Basic Income","Cities"]
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const days = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]

  return(
    <div className="story-index-item-container">
      <div className="story-index-item-info">
        <Link to={`/stories/${story.id}`}>
          <h3 className="story-index-item-title">{story.title}</h3>
          <h4 className="story-index-item-body">{story.body}</h4>
        </Link>
      </div>

      <small className="story-index-item-author">
        <Link to={`/users/${story.author_id}`}>
          {story.author} 
        </Link>
        &nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}
      </small>

      <small className="story-index-item-date">
        {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}
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
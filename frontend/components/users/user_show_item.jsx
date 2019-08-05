import React from 'react';
import { Link } from 'react-router-dom';

const UserShowItem = ({ story }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

  return(
    <div className="user-item-container">
      <header className="user-item-header">
        <div className="profile-pic">
          <Link to={`/users/${story.author_id}`}>
            <img className="profile-pic" src="https://median-aa-seeds.s3.amazonaws.com/profile_pic.jpg" alt="Photo" width="48" height="48" />
          </Link>
        </div>

        <div className="user-item-info">
          <small className="user-item-author">
            <Link to={`/users/${story.author_id}`}>
              {story.author}
            </Link>
            &nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}
          </small>

          <small className="user-item-date">
            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>

        <Link to={`/stories/${story.id}`}>
          <figure className="user-item-image-container">
            <img src={`${story.photo_url}`} alt="Photo" className="user-item-image" />
          </figure>
          <h1 className="user-item-title">{story.title}</h1>
          <h3 className="user-item-body">{story.body}</h3>
        </Link>

        <footer className="user-item-footer">
          <Link>
            <small className="user-item-responses">Responses</small>
          </Link>
        </footer>
      </header>
    </div>
  )
}

export default UserShowItem;
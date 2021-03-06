import React from 'react';
import { Link } from 'react-router-dom';

const UserShowItem = ({ story }) => {
  // const topics = ["Arts & Entertainment", "Art", "Beauty", "Books", "Comics", "Culture", "Fiction", "Film", "Innovation & Tech", "Accessibility", "Android Dev", "Artificial Intelligence", "Blockchain", "Cryptocurrency", "Cybersecurity", "Data Science", "Life", "Addiction", "Cannabis", "Creativity", "Disability", "Family", "Fitness", "Society", "Basic Income", "Cities"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
  let date = new Date()
  let month = date.getMonth()
  let day = date.getUTCDate()

  return(
    <div className="user-item-container">
      <header className="user-item-header">
        <div className="user-item-profile-pic-container">
          <Link to={`/users/${story.author.id}`}>
            <img className="user-item-profile-pic" src="https://median-aa-seeds.s3.amazonaws.com/profile_pic.jpg" alt="Photo" width="40" height="40" />
          </Link>

          <div className="user-item-info">
            <small className="user-item-author">
              <Link to={`/users/${story.author.id}`}>
                {story.author.fullname}{/*&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}*/}
              </Link>
            </small>

            <small className="user-item-date">
              {months[month]}&nbsp;{day}&nbsp;&#183;&nbsp;{nums[4]}&nbsp;min&nbsp;read&nbsp;&#9733;
            </small>
          </div>
        </div>

        <Link to={`/stories/${story.id}`}>
          <figure className="user-item-image-container">
            <img src={`${story.photo_url}`} alt="Photo" className="user-item-image" />
          </figure>
          <h1 className="user-item-title">{story.title}</h1>
          <h3 className="user-item-body">{story.body}</h3>
        </Link>

        <footer className="user-item-footer">
          <Link to={`/stories/${story.id}`}>
            <small className="user-item-responses">responses</small>
            <img className="user-item-arrow" src="https://median-aa-seeds.s3.amazonaws.com/down-arrow.png" alt="Icon" />
          </Link>
        </footer>
      </header>
    </div>
  )
}

export default UserShowItem;
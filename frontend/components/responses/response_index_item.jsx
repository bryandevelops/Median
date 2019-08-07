import React from 'react';
import { Link } from 'react-router-dom';

const ResponseIndexItem = ({ response, deleteResponse, currentUser }) => {
  const date = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]

  const deleteButton = response.author_id === currentUser.id ?
    <button className="response-item-delete" onClick={deleteResponse}>Delete</button>
    : ""

  const followButton = currentUser && currentUser.id !== response.author_id ?
    <Link to="/"><button className="response-item-follow">Follow</button></Link>
    : ""

  return(
    <div className="response-item-container">

      <div className="response-item-content">
        <Link to={`/users/${response.author.id}`}>
          <img className="response-item-profile-pic" src="https://median-aa-seeds.s3.amazonaws.com/profile_pic.jpg" alt="Photo" width="48" height="48" />
        </Link>

        <header className="response-item-header">
          <small className="response-item-author">
            <Link to={`/users/${response.author.id}`}>
              <h3>{response.author.fullname}</h3>
              {followButton}
            </Link>
          </small>

          <small className="response-item-date">
            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;{date.getFullYear()}
          </small>
        </header>
      </div>

      <div className="response-item-body">
        {response.body}
      </div>

      {deleteButton}
    
    </div>
  )
}

export default ResponseIndexItem;
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class ResponseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteResponse(this.props.response).then(() => this.props.fetchResponses(this.props.story.id))
  }

  render() {
    const { response, deleteResponse, currentUser } = this.props;

  const date = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]

  

  const followButton = currentUser && currentUser.id !== response.author_id ?
    <Link to="/"><button className="response-item-follow">Follow</button></Link>
    : ""

  let deleteButton;
  if (currentUser && currentUser.id === response.author_id) {
    deleteButton = <button className="response-item-delete" onClick={this.handleDelete}>Delete</button>
  } else { "" }

  let editButton;
  if (currentUser && currentUser.id === response.author_id) {
    editButton = <button className="response-item-edit"><Link to={`/stories/${response.story_id}/responses/${response.id}/edit`}>Edit</Link></button>
  } else { "" }

  return(
    <div className="response-item-container">

      <div className="response-item-content">
        <Link to={`/users/${response.author.id}`}>
          <img className="response-item-profile-pic" src="https://median-aa-seeds.s3.amazonaws.com/profile_pic.jpg" alt="Photo" width="48" height="48" />
        </Link>

        <div className="response-item-info">
          <small className="response-item-author-info">
            <div className="response-item-author">
              <Link to={`/users/${response.author.id}`}>
                {response.author.fullname}
              </Link>
            </div>
          {followButton}
          </small>  

          <small className="response-item-date">
            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]},&nbsp;{date.getFullYear()}
          </small>
        </div>
      </div>

      <div className="response-item-body">
        {response.body}
      </div>

      <div className="response-item-buttons">
        {editButton}
        {deleteButton}
      </div>
    </div>
  )
  }
}

export default withRouter(ResponseIndexItem);
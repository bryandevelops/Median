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
    const { response, currentUser } = this.props;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let date = new Date()
    let month = date.getMonth()
    let day = date.getUTCDate()
    let year = date.getFullYear()

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
            </small>  

            <small className="response-item-date">
              {months[month]}&nbsp;{day},&nbsp;{year}
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
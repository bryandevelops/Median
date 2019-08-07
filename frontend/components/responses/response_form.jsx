import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ResponseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.response
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.value !== this.props.value) {
  //     this.props.
  //   }
  // }

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.history.push("/").fail(err => this.props.history.push("/"));
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push(`/stories/${this.state.story_id}`))
  }

  handleDelete(e) {
    e.preventDefault();
    
    this.props.deleteResponse(this.props.response).then(() => this.props.history.push(`/stories/${this.state.story_id}`))
  }
  
  render() {
    return(
    <>
      <div className="response-edit-box-shadow"></div>

      <div className="response-edit-form-container">
        <form onSubmit={this.handleSubmit} className="response-edit-form">

          <div id="response-edit-form-submit">
            <input className="response-edit-form-edit" type="submit" value={this.props.formType} />
            <button className="response-edit-form-delete" onClick={this.handleDelete}>Delete story</button>
          </div>

          <Link to={`/stories/${this.props.response.story.id}`}>
            <div className="response-edit-story-info-container">
              <section className="response-edit-story-info">
                <h3 className="response-edit-title">{this.props.response.story.title}</h3>
                  <h3 className="response-edit-body">Get back to reading?</h3>
              </section>
            </div>
          </Link>

          <textarea value={this.state.body} onChange={this.update("body")} className="response-edit-input-body" placeholder="Write a response" cols="20" required></textarea>
        </form>
      </div>
    </>
    )
  }
}

export default withRouter(ResponseForm)
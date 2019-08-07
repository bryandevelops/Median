import React from 'react';
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

          {/* <h6 className="response-edit-form-title">Title</h6>
          <input type="text" value={this.state.title} onChange={this.update("title")} className="response-edit-input-title" placeholder="Title" required /> */}

          {/* <label className="file-upload"><img src="https://median-aa-seeds.s3.amazonaws.com/plus.png" />
            <input type="file" className="response-edit-input-file" onChange={this.handleFile} required />
          </label>
          <h3 className="response-edit-form-preview">{preview}</h3> */}

          <textarea value={this.state.body} onChange={this.update("body")} className="response-edit-input-body" placeholder="Tell your story..." cols="20" required></textarea>
        </form>
      </div>
    </>
    )
  }
}

export default withRouter(ResponseForm)
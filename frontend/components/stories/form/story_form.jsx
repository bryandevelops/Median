import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: this.props.story,
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const story = Object.assign({}, this.state.story);
    this.props.processForm(story).then(() => this.props.history.push(`/stories/${this.state.story.id}`))
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteStory(this.state.story.id).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`))
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  render() {
    const deleteButton = this.props.formType === "Edit story" ?
      <button className="story-form-delete" onClick={this.handleDelete}>Delete story</button>
      : ""

    return(
      <div className="story-form-container">
        <form onSubmit={this.handleSubmit} className="story-form">

            <input type="file" className="story-input-file" onChange={this.handleFile}/>

            <div id="submit">
              <input className="story-form-submit" type="submit" value={this.props.formType} />
              {deleteButton}
            </div>

            <input type="text" value={this.state.story.title} onChange={this.update("title")} className="story-input-title" placeholder="Title"/>

            <textarea value={this.state.story.body} onChange={this.update("body")} className="story-input-body" placeholder="Tell your story..."/>

        </form>
      </div>
    );
  }
}

export default withRouter(StoryForm);
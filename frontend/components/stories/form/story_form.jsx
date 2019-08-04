import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.story
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
    const story = Object.assign({}, this.props.story);
    // debugger
    this.props.processForm(story).then(() => this.props.history.push(`/stories/${this.props.story.id}`))
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
      <>
        <div className="story-box-shadow"></div>

        <div className="story-form-container">
          <form onSubmit={this.handleSubmit} className="story-form">


              <div id="submit">
                <input className="story-form-edit" type="submit" value={this.props.formType} />
                {deleteButton}
              </div>
              
            <h6 className="story-form-title">Title</h6>
              <input type="text" value={this.state.title} onChange={this.update("title")} className="story-input-title" placeholder="Title"/>
              
              <label className="file-upload"><img src="https://median-aa-seeds.s3.amazonaws.com/plus.png"/>
                <input type="file" className="story-input-file" onChange={this.handleFile}/>
              </label>

              <textarea value={this.state.body} onChange={this.update("body")} className="story-input-body" placeholder="Tell your story..."/>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(StoryForm);
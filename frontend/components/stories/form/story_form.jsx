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

  handleFile(e) {
    e.preventDefault();
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  render() {
    return(
      <div className="story-form-container">
        <form onSubmit={this.handleSubmit} className="story-form-box">
          <div className="story-form">

            {/* <input type="file" className="story-input-file" onChange={this.handleFile}/> */}

            <label className="story-label-title">Title</label>
            <input type="text" value={this.state.story.title} onChange={this.update("title")} className="story-input-title"/>

            <label className="story-label-body">Body</label>
            <textarea value={this.state.story.body} onChange={this.update("body")} className="story-input-body" placeholder="Tell your story..."></textarea>

            <div id="submit"><input className="sessions-submit" type="submit" value={this.props.formType} /></div>
          </div>

          <footer className="small-footer">
            <small className="small-footer-words">{this.props.formFooter}</small>
            &nbsp;
            <small>{this.props.otherForm}</small>
          </footer>
        </form>
      </div>
    );
  }
}

export default withRouter(StoryForm);
import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.story;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const story = Object.assign({}, this.state);
    this.props.processForm(story).then(() => this.props.history.push(`/api/stories/${this.state.id}`))
  }

  render() {
    return(
      <div className="story-form-container">
        <form onSubmit={this.handleSubmit} className="story-form-box">
          <div className="story-form">

            <input type="file" className="story-input-file"/>

            <label className="story-label-title">Title</label>
            <input type="text" value={this.state.title} onChange={this.update("title")} className="story-input-title"/>

            <label className="story-label-body">Body</label>
            <textarea value={this.state.body} onChange={this.update("body")} className="story-input-body" placeholder="Tell your story..." cols="30" rows="10"></textarea>

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
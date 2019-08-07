import React from 'react';
import { Link } from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/core';

const override = css`
    position: relative;
    display: block;
    margin: auto;
    top: 180px;
`;

class ResponseIndexForm extends React.Component {
  constructor(props){
    super(props);
    this.responseText = "";
  }

  handleInput(e) {
    e.preventDefault();
    this.responseText = e.currentTarget.innerText;
  }

  handlePaste(e) {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  }

  handleSubmit(e) {
    if (this.responseText === "") { return; }

    const response = {
      body: this.responseText,
      story_id: this.props.storyId,
      author_id: this.props.currentUser.id
    };

    this.props.createResponse(response);
    document.getElementById("response-form-input").innerText = "";
    this.responseText = "";
    this.displayForm = false;
  }

  render() {
    if (!this.props.currentUser) {
      return (
        <div className="story-index-loading"><GridLoader css={override} sizeUnit={"px"} size={20} /></div>
      )
    }

    return(
      <div className="response-index-form">

        <div className="index-form-input">
          <Link to={`/users/${this.props.story.author_id}`}>
            <img className="index-form-profile-pic" src="https://median-aa-seeds.s3.amazonaws.com/profile_pic.jpg" alt="Photo" width="48" height="48" />
          </Link>

          <h3 className="index-form-author">{this.props.currentUser.fullname}</h3>

        </div>
          <div
            id="response-form-input"
            className="response-form-body"
            contentEditable="true"
            onPaste={this.handlePaste}
            onInput={this.handleInput.bind(this)}>
          </div>

        <div className="response-footer">
            <button onClick={this.handleSubmit.bind(this)}>Publish</button>
        </div>

      </div>
    )

  }
}

export default ResponseIndexForm;
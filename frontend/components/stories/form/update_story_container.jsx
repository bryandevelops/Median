import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateStory, fetchStory, deleteStory } from '../../../actions/story_actions';
import StoryForm from './story_form';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/core';

const override = css`
    position: relative;
    display: block;
    margin: auto;
    top: 180px;
`;

const mapStateToProps = ({ sessions, entities: { users, stories } }, ownProps) => {
  // const defaultStory = { title: "", body: "" }
  // debugger
  return({
    story: stories[ownProps.match.params.storyId],
    formType: "Edit story",
    currentUser: users[sessions.id],
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchStory: id => dispatch(fetchStory(id)),
    processForm: story => dispatch(updateStory(story)),
    deleteStory: id => dispatch(deleteStory(id)),
  })
};

class UpdateStoryForm extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.story.id != this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId);
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { story, formType, processForm, currentUser, deleteStory, history } = this.props;

    if (!story) {
      return (
        <div className="story-index-loading"><GridLoader css={override} sizeUnit={"px"} size={20} /></div>
      )
    }

    return(
      <StoryForm 
        story={story} 
        formType={formType} 
        processForm ={processForm}
        deleteStory={deleteStory}
        currentUser={currentUser}
        history={history}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStoryForm);


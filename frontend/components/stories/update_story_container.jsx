import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateStory, fetchStory } from '../../actions/story_actions';
import StoryForm from './story_form';

const mapStateToProps = ({ sessions, entities: { users, stories } }, ownProps) => {
  const defaultStory = { title: "", body: "" }

  return({
    story: stories[ownProps.match.params.storyId] || defaultStory,
    formType: "Update story",
    currentUser: users[sessions.id],
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchStory: id => dispatch(fetchStory(id)),
    processForm: story => dispatch(updateStory(story)),
  })
};

class UpdateStoryForm extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.story.id != this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId);
    }
  }

  render() {
    const { story, formType, processForm } = this.props;

    return(
      <StoryForm story={story} formType={formType} processForm ={processForm}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStoryForm);


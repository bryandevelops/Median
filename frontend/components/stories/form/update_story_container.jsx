import React from 'react';
import { connect } from 'react-redux';
import { updateStory, fetchStory, deleteStory } from '../../../actions/story_actions';
import StoryForm from './story_form';

const mapStateToProps = ({ sessions, entities: { users, stories } }, ownProps) => {
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
    if (prevProps.match.params.storyId != this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId);
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { story, formType, processForm, currentUser, deleteStory, history } = this.props;

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


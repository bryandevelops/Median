import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStory } from '../../../actions/story_actions'
import StoryForm from './story_form';

const mapStateToProps = ({ sessions, entities: { users } }) => {
  return({
    story: { title: "", body: "" },
    formType: "Publish",
    currentUser: users[sessions.id]
  })
};

const mapDispatchToProps = dispatch => {
  return({
    processForm: story => dispatch(createStory(story)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
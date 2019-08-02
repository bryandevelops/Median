import { connect } from 'react-dom';
import { withRouter } from 'react-router-dom';
import { createStory } from '../../actions/story_actions'
import StoryForm from './story_form';

const mapStateToProps = ({ sessions, entities: { users } }) => {
  return({
    story: { title: "", body: "" },
    formType: "Create story",
    currentUser: users[sessions.id]
  })
};

const mapDispatchToProps = dispatch => {
  return({
    processForm: story => dispatch(createStory(story)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
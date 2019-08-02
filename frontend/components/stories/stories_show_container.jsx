import { connect } from 'react-redux';
import { fetchStory } from '../../actions/story_actions';
import StoryShow from './stories_show';

const mapStateToProps = ({ sessions, entities: { users, stories } }, ownProps) => {
  return({
    story: stories[ownProps.match.params.storyId],
    currentUser: users[sessions.id]
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchStory: id => dispatch(fetchStory(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryShow);
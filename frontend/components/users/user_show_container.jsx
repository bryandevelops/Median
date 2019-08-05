import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchStory } from '../../actions/story_actions';
import UserShow from './user_show';

const mapStateToProps = ({ sessions, entities: { users, stories } }, ownProps) => {
  return({
    user: users[ownProps.match.params.userId],
    stories: Object.values(stories),
    currentUser: users[sessions.id]
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchUser: user => dispatch(fetchUser(user)),
    fetchStory: story => dispatch(fetchStory(story)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
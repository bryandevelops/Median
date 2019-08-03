import { connect } from 'react-redux';
import { fetchStories } from '../../actions/story_actions';
import StoryIndex from './story_index';

const mapStateToProps = ({ entities: { stories, users } }) => {
  return({
    stories: Object.values(stories),
    users: Object.values(users),
  })
};

const mapDispatchToProps = dispatch => {
  return({
  fetchStories: () => dispatch(fetchStories()),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex);
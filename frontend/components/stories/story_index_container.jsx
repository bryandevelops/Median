import { connect } from 'react-redux';
import { fetchStories, deleteStory } from '../../actions/story_actions';
import StoryIndex from './story_index';

const mapStateToProps = ({ entities: { stories } }) => {
  return({
    stories: Object.values(stories)
  })
};

const mapDispatchToProps = dispatch => {
  return({
  fetchStories: () => dispatch(fetchStories()),
  deleteStory: id => dispatch(deleteStory(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex);
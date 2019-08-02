import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const stories = this.props.stories.map(story => {
      return(
        <StoryIndexItem key={story.id} story={story} deleteStory={this.props.deleteStory} />
      );
    });

    return(
      <ul>
        {stories}
      </ul>
    );
  }
}

export default StoryIndex;
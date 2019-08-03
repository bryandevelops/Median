import React from 'react';
import StoryIndexItem from './story_index_item';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/core';

const override = css`
    position: relative;
    display: block;
    margin: auto;
    top: 180px;
`;

class StoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.stories < 20) {
      return( 
        <div className="story-index-loading">
          <GridLoader css={override} sizeUnit={"px"} size={20} />
        </div>
      )
    }
    
    const mainStories = this.props.stories.map(story => {
      return(
        <StoryIndexItem key={story.id} story={story}/>
      );
    });
  
    return(
      <ul>
        {mainStories}
      </ul>
    );
  }
}

export default StoryIndex;